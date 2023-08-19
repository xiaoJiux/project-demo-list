import Mock from "mockjs";

const Random = Mock.Random;
Random.natural();
const data = Mock.mock("test/data", "get", {
	success: true,
	"data|20": ["@natural(1, 12)"]
	// data: {
	// 	"xData|7": ["@natural(1, 12)"],
	// 	bar1: {
	// 		name: "Evaporation",
	// 		"data|12": ["@natural(10, 50)"]
	// 	},
	// 	bar2: {
	// 		name: "Precipitation",
	// 		"data|12": ["@natural(10, 50)"]
	// 	},
	// 	line1: {
	// 		name: "Temperature",
	// 		"data|12": ["@natural(10, 50)"]
	// 	}
	// }
});
export default data;