const arr = [
	'rgb(255, 179, 167)',
	'rgb(237, 87, 54)',
	'rgb(240, 0, 86)',
	'rgb(244, 121, 131)',
	'rgb(219, 90, 107)',
	'rgb(242, 12, 0)',
	'rgb(201, 55, 86)',
	'rgb(240, 86, 84)',
	'rgb(255, 33, 33)',
	'rgb(140, 67, 86)',
	'rgb(200, 60, 35)',
	'rgb(157, 41, 51)',
	'rgb(255, 76, 0)',
	'rgb(255, 78, 32)',
	'rgb(243, 83, 54)',
	'rgb(203, 58, 86)',
	'rgb(255, 45, 81)',
	'rgb(201, 31, 55)',
	'rgb(239, 122, 130)',
	'rgb(255, 0, 151)',
	'rgb(255, 51, 0)',
	'rgb(195, 39, 43)',
	'rgb(169, 129, 117)',
	'rgb(195, 33, 54)',
	'rgb(179, 109, 97)',
	'rgb(190, 0, 47)',
	'rgb(220, 48, 35)',
	'rgb(249, 144, 111)',
	'rgb(255, 241, 67)',
	'rgb(250, 255, 114)',
	'rgb(234, 255, 86)',
	'rgb(255, 166, 49)',
	'rgb(255, 140, 49)',
	'rgb(255, 137, 54)',
	'rgb(255, 164, 0)',
	'rgb(255, 117, 0)',
	'rgb(255, 199, 115)',
	'rgb(240, 194, 57)',
	'rgb(250, 140, 53)',
	'rgb(179, 92, 68)',
	'rgb(168, 132, 98)',
	'rgb(200, 155, 64)',
	'rgb(96, 40, 30)',
	'rgb(178, 93, 37)',
	'rgb(130, 113, 0)',
	'rgb(124, 75, 0)',
	'rgb(155, 68, 0)',
	'rgb(174, 112, 0)',
	'rgb(156, 83, 51)',
	'rgb(149, 85, 57)',
	'rgb(202, 105, 36)',
	'rgb(110, 81, 30)',
	'rgb(211, 177, 125)',
	'rgb(226, 156, 69)',
	'rgb(137, 108, 57)',
	'rgb(217, 182, 17)',
	'rgb(189, 221, 3 )',
	'rgb(201, 221, 34)',
	'rgb(175, 221, 34)',
	'rgb(120, 146, 98)',
	'rgb(163, 217, 0)',
	'rgb(158, 217, 0)',
	'rgb(14, 184, 58)',
	'rgb(14, 184, 58)',
	'rgb(10, 163, 68)',
	'rgb(0, 188, 18)',
	'rgb(12, 137, 24)',
	'rgb(27, 209, 165)',
	'rgb(42, 221, 156)',
	'rgb(72, 192, 163)',
	'rgb(61, 225, 173)',
	'rgb(64, 222, 90)',
	'rgb(0, 224, 158)',
	'rgb(0, 224, 121)',
	'rgb(192, 235, 215)',
	'rgb(224, 238, 232)',
	'rgb(187, 205, 197)',
	'rgb(66, 76, 80)',
	'rgb(0, 229, 0)',
	'rgb(158, 208, 72)',
	'rgb(150, 206, 84)',
	'rgb(123, 207, 166)',
	'rgb(46, 223, 163)',
	'rgb(127, 236, 173)',
	'rgb(164, 226, 198)',
	'rgb(33, 166, 117)',
	'rgb(5, 119, 72)',
	'rgb(188, 230, 114)',
	'rgb(68, 206, 246)',
	'rgb(23, 124, 176)',
	'rgb(6, 82, 121)',
	'rgb(62, 237, 231)',
	'rgb(112, 243, 255)',
	'rgb(75, 92, 196)',
	'rgb(161, 175, 201)',
	'rgb(46, 78, 126)',
	'rgb(59, 46, 126)',
	'rgb(74, 66, 102)',
	'rgb(74, 66, 102)',
	'rgb(74, 66, 102)',
	'rgb(66, 102, 102)',
	'rgb(66, 80, 102)',
	'rgb(87, 66, 102)',
	'rgb(141, 75, 187)',
	'rgb(129, 84, 99)',
	'rgb(129, 84, 118)',
	'rgb(76, 34, 27)',
	'rgb(0, 51, 113)',
	'rgb(86, 0, 79)',
	'rgb(128, 29, 174)',
	'rgb(76, 141, 174)',
	'rgb(176, 164, 227)',
	'rgb(204, 164, 227)',
	'rgb(237, 209, 216)',
	'rgb(228, 198, 208)',
	'rgb(117, 135, 138)',
	'rgb(81, 154, 115)',
	'rgb(162, 155, 124)',
	'rgb(115, 151, 171)',
	'rgb(57, 82, 96)',
	'rgb(209, 217, 224)',
	'rgb(136, 173, 166)',
	'rgb(243, 211, 231)',
	'rgb(212, 242, 231)',
	'rgb(210, 240, 244)',
	'rgb(211, 224, 243)',
	'rgb(48, 223, 243)',
	'rgb(37, 248, 203)',
	'rgb(255, 255, 255)',
	'rgb(255, 251, 240)',
	'rgb(240, 252, 255)',
	'rgb(214, 236, 240)',
	'rgb(242, 236, 222)',
	'rgb(224, 240, 233)',
	'rgb(243, 249, 241)',
	'rgb(233, 241, 246)',
	'rgb(194, 204, 208)',
	'rgb(252, 239, 232)',
	'rgb(227, 249, 253)',
	'rgb(128, 128, 128)',
	'rgb(238, 222, 176)',
	'rgb(240, 240, 244)',
	'rgb(98, 42, 29)',
	'rgb(61, 59, 79)',
	'rgb(114, 94, 130)',
	'rgb(57, 47, 65)',
	'rgb(22, 24, 35)',
	'rgb(80, 97, 109)',
	'rgb(117, 138, 153)',
	'rgb(0, 0, 0)',
	'rgb(73, 49, 49)',
	'rgb(49, 37, 32)',
	'rgb(93, 81, 60)',
	'rgb(117, 102, 77)',
	'rgb(107, 104, 130)',
	'rgb(102, 87, 87)',
	'#41555d',
	'#f2be45',
	'#eacd76',
	'#e9e7ef',
	'#549688',
	'#a78e44',
	'#bacac6'
];


export default arr
