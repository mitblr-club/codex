import { highlight, languages } from "prismjs";
import "prismjs/components/prism-jsx";

export default function Code({ code, language }) {
	const languageL = language.toLowerCase();
	const prismLanguage = languages[languageL] || languages.javascript;

	return (
		<pre className={`notion-code language-${languageL}`}>
		  <code
			className={langClass}
			dangerouslySetInnerHTML={{
			  __html: highlight(code, prismLanguage, language)
			}}
		  />
		</pre>
	);
}