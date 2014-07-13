/*******************************************************************************
    Copyright (c) 2012, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
 ******************************************************************************/

var o1 = {};
var o2 = {x:123};
var o3 = {x:123, y:456};
var o4 = {x:123, y:456, z:789};

var p;

if (__TOP)
	p = "x" 
else
	p = "y"

var __result1 = delete o1[p];
var __expect1 = true;
var __result2 = o1[p];
var __expect2 = undefined;

var __result3 = delete o2[p];
var __expect3 = true;
var __result4 = o2[p];
var __expect4 = undefined;

var __result5 = delete o3[p];
var __expect5 = true;
var __result6 = o3[p];
var __expect6 = undefined;

var __result7 = delete o4[p];
var __expect7 = true;
var __result8 = o4[p];
var __expect8 = undefined;
var __result9 = o4["z"];
var __expect9 = 789;
