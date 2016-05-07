# Clickslash

Sister prototype of [clickjump](https://github.com/ksiondag/clickjump)!

## 0.0.1

### Goals

#### Animated Collision Boxes

Hitbox/hurtbox elements on player-entity that animate appropriately based on
direction of click.

Ideally, this would be setup such that it'd be easy to splice proper art over
the hitboxes without there being a lot of drawing work, but figuring out how to
do that exactly may be beyond scope for this prototype.

#### Collision Rules

This is a prototype designed to work towards an eventual Wuxia-inspired game.
Meaning I'd like to incorporate Wuxia tropes and cliches, and also steal some
tropes/cliches from general sword-fighting culture.

What I'd like to explore in this prototype is the various different
possibilities of sword-hitting-sword. I have in minde several different
results:

##### Bounce

Two swordswomen hit each other so hard they throw each other back.

##### Block

Two swordswomen clash blow-for-blow, negating each other's attacks in a fury of
parries and attacks.

##### Winner-Take-All

Two swordswomen rush each other and slash past one-another. Only one remains
standing.

### Challenges

How can I implement all types of collisions in a predictable way that allows
mechanics mastering for a player?

#### Idea 1: Different Collision Boxes

There can be a variety of attack hitboxes: negate, bounce, etc. A negate hitbox
simply blocks all attacks it collides with and transfers no momentum. A bounce
causes a bounce when colliding with an attack that doesn't negate it.

And then there can be player hurtboxes that receive damage when colliding with
an attack.

