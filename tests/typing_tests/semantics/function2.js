/*******************************************************************************
    Copyright (c) 2012, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
 ******************************************************************************/

function Foo() { };
Foo.prototype.x = 10;

var __result1 = delete Foo.prototype;
var __expect1 = false;

var __result2 = Foo.prototype.x;
var __expect2 = 10;
