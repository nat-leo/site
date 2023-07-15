# UNDER CONSTRUCTION

### Friday July 14, 2023

# Compilers and Scanners

It's time to talk scanner implementations. Scanners are really boring and I'd suggest youd skip this page. Once I'm done with this article there'll be code hanging out for you to use.

# What the Scanner Does

```
int a = 5;
int b = 10;
int sum = a + b;
```

Scanning is the first step of the compiler. It does two things:

#### 1. Find words 

Find a word or variable or keyword or whatever you specified as part of your language. It should find kewords like `int`, variables like `a` `b` and `sum`, and operands like `+` and `=`.

It should also find WHITESPACE like `' '` or `\n`.

#### 2. Spit out Lexemes

Lingo for the a word with extra info (At least in the case of compilers.) Lexemes are like `(int, keyword)`, `(=, operation)`, or `(sum, variable)`.

A Lexeme is usually a tuple:
```
(first element, second element)
```
```
(the thing we recognized, it's family)
```
```
(match, token)
```
There's a whole art form to what that second element aka token should be, but that's for another article.