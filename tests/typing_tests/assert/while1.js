/*******************************************************************************
    Copyright (c) 2012, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
 ******************************************************************************/

var x = 123;

while(__TOP) {
	x = 456;
	break;
	x = 789;
}

var __result1 = x;
var __expect1 = __UInt;

