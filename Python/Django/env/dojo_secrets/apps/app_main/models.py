from __future__ import unicode_literals
from django.db import models
import re
import bcrypt
email_re = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

class UserManager(models.Manager):
    def login(self,email,password):
        errs  = []

        if len(email) < 1:
            errs.append('Email cannot be blank.')
        elif not email_re.match(email):
            errs.append('Invalid email format.')
        else:#dont bother touching db if either of the above happen
            user = User.manager.filter(email=email)
            if len(user) < 1:
                errs.append('This account does not exist.')
            else:
                valid = bcrypt.hashpw(password.encode('utf-8'),user[0].password.encode('utf-8'))
                if not valid == user[0].password:#incorrect
                    errs.append('Incorrect Password.')

        if len(password) < 8:
            errs.append('Invalid password.')

        if len(errs) < 1:
            return True,user[0]
        else:
            return False,errs
    def register(self,first_name,last_name,email,password,confirm):
        errs = []
        if len(first_name) < 1 or len(last_name) < 1:
            errs.append('Name cannot be blank.')

        if len(email) < 1:
            errs.append('Email cannot be blank.')
        elif not email_re.match(email):
            errs.append('Invalid email format.')
        else:#dont bother touching db if either of the above happen
            user = User.manager.filter(email=email)
            if len(user) >= 1:
                errs.append('A user with this email already exists.')

        if len(password) < 8 or len(confirm) < 8:
            errs.append('Password must be at least 8 characters long.')
        elif password != confirm:
            errs.append('Password do not match.')

        if len(errs) < 1:
            return True,User.manager.create(
                first_name = first_name,
                last_name  = last_name,
                email      = email,
                password   = bcrypt.hashpw(password.encode('utf-8'),bcrypt.gensalt())#hash
            )
        else:
            return False,errs

class SecretManager(models.Manager):
    def validate(self,text,uid):
        errs = []

        if len(text) < 1:
            errs.append('Secret cannot be blank.')

        if len(errs) < 1:
            return True,Secret.manager.create(text=text,user_id=uid,likes=0)
        else:
            return False,errs

class LikeManager(models.Manager):
    def add(self,user_id,secret_id):#filter is easier than try/catching a get, so yea.
        like   = Like.manager.filter(user_id=user_id,secret_id=secret_id)
        secret = Secret.manager.get(id=secret_id)

        if len(like) == 1:#Unlike the post if they already liked it.
            secret.likes -= 1
            secret.save()
            return False,like.delete()
        else:
            secret.likes += 1
            secret.save()
            return True,Like.manager.create(
                user_id=user_id,
                secret_id=secret_id
            )

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name  = models.CharField(max_length=255)
    email      = models.CharField(max_length=255)
    password   = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    manager    = UserManager()

#Post
class Secret(models.Model):
    text       = models.TextField(max_length=1000)
    user       = models.ForeignKey(User)
    #seemed way easier to give a likes field than looping via some template to count
    likes      = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    manager    = SecretManager()

class Like(models.Model):
    user       = models.ForeignKey(User)
    secret     = models.ForeignKey(Secret)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    manager    = LikeManager()