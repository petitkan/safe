/*******************************************************************************
    Copyright (c) 2012, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
 ***************************************************************************** */

var x = {p:1}

var __result1 = x.p;
var __expect1 = 1;

// toObject(x)
delete x.p

var __result2 = x.p;
var __expect2 = undefined;
