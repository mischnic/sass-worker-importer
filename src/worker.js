self.Buffer = require("buffer").Buffer;

const sass = require("sass");

const data = `$colorRed: red;
#header {
  color: $colorRed;
}`;

function run() {
	return sass.renderSync({
		data,
		importer: [
			(url, prev, done) => {
				return { file: url };
			}
		]
	});
}

console.log(run().css.toString("utf8"));
