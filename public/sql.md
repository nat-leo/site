# SQL Language

## Saturday July 22, 2023

Languages are just specifications and recommendations of what to support. You don't really learn how to program with a language. You learn how to program with a compiler, and just like C has compilers like Clang and GCC, SQL has compilers too.

# A list of SQL queries to support:

Keywords must be ALL CAPS. Select, select, or SELeCT won't work so our job is simpler. We're only going to match ALL CAPS for keywords. 

```
SELECT column FROM table;
SELECT * FROM table;
```

To start, we aren't gonna let people access mulitple rows at the same time. You can access one row per query and that's all. 

```
SELECT column FROM table WHERE condition;
```

You're only allowed to have one condition, and that's `==`. No `<`. No `<=`. Ternaries are right out. The condition is always of the form `this=that;` (Note that conditions are always followed by a semicolon.)

```
CREATE TABLE table (column1 datatype)
```
We're only gonna have tables with 1 column. That's all we're gonna do.

## The Tokens:

keywords:
```
SELECT = "SELECT"
FROM = "FROM"
WHERE = "WHERE"
CREATE = "CREATE TABLE"
```

other:
```
LPAR = "("
RPAR = ")"
ID = "ID"
IGNORE = "IGNORE"
EQ = "="
SEMI = "SEMI"
```

## The Lexemes:
tokens = [(Token.EQ,     "=="),
          (Token.LPAR,   "\("),
          (Token.RPAR,   "\)"),
          (Token.SEMI,   ";"),
          (Token.ID,     "[a-zA-Z]+[a-zA-Z0-9]*")]

## The Grammar

Our grammar is implemented as a Recursive Descent Parser (RDP).

Our RDP must encode precedence of operators (Luckily we only have one so this doesn't matter too much). Our RDP must not be left recrusive (grammar can't expand goinf left; only right.)
 
in BNF form:
```
query_list ::= query query_list
query      ::= select_query SEMI
           |   create_table_query SEMI
           |   None
select_query       ::= SELECT * FROM table
create_table_query ::= CREATE table  LPAR column RPAR
table ::= ID
column ::= ID
```