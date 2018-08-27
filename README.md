# pwgen
A password generator that creates strong and easy-to-remember passwords

## What it is
Pwgen is much of a personal project written in pure JavaScript that generates easy to remember passwords which are really strong too. The passwords are a combination of common English words, numbers, and commonly-used symbols.

## What makes the passwords strong?
Let's assume you'd otherwise choose a password 12 characters long from a set of 92 characters (26 small letters, 26 capital letters, 10 digits, 30 symbols). You'd have `92^12 = 3.68E23` combinations. This password generator chooses from a set of 996 characters, so there are `996^16 = 9.38E47` combinations. Both are theoretically 'strong' passwords, but passwords made up of commonly used words are much harder to guess, `2.55E24` times, to be precise. Also, it's easier to for you to remember than a string of random characters, which, in most cases, are not random at all if they're not generated. 
