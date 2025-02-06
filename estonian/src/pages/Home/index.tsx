import preactLogo from '../../assets/preact.svg';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';
import { useTranslation } from '../../contexts/TranslationContext';
import './style.css';

interface TableRow {
	pronoun: string;
	affirmative: string;
	negative: string;
}

interface QuestionRow {
	questionWord: string;
	meaning: string;
	description: string;
	example: string;
}

export function Home() {
	const { translations } = useTranslation();

	const beVerbData: TableRow[] = [
		{ pronoun: 'Ma', affirmative: 'Ole<strong class="verb-highlight">n</strong>', negative: 'Ma ei ole' },
		{ pronoun: 'Sa', affirmative: 'Ole<strong class="verb-highlight">d</strong>', negative: 'Sa ei ole' },
		{ pronoun: 'Ta', affirmative: '<u>On<u/>', negative: 'Ta ei ole' },
		{ pronoun: 'Me', affirmative: 'Ole<strong class="verb-highlight">me</strong>', negative: 'Me ei ole' },
		{ pronoun: 'Te', affirmative: 'Ole<strong class="verb-highlight">te</strong>', negative: 'Te ei ole' },
		{ pronoun: 'Nad', affirmative: '<u>On<u/>', negative: 'Nad ei ole' }
	];

	const understandVerbData: TableRow[] = [
		{ pronoun: 'Ma', affirmative: 'Saa<strong class="verb-highlight">n</strong> aru', negative: 'Ma ei saa aru' },
		{ pronoun: 'Sa', affirmative: 'Saa<strong class="verb-highlight">d</strong> aru', negative: 'Sa ei saa aru' },
		{ pronoun: 'Ta', affirmative: 'Saa<strong class="verb-highlight">b</strong> aru', negative: 'Ta ei saa aru' },
		{ pronoun: 'Me', affirmative: 'Saa<strong class="verb-highlight">me</strong> aru', negative: 'Me ei saa aru' },
		{ pronoun: 'Te', affirmative: 'Saa<strong class="verb-highlight">te</strong> aru', negative: 'Te ei saa aru' },
		{ pronoun: 'Nad', affirmative: 'Saa<strong class="verb-highlight">vad</strong> aru', negative: 'Nad ei saa aru' }
	];

	// const questionWordsData: QuestionRow[] = [
	// 	{ questionWord: 'Kes?', meaning: 'Who?', description: 'Used to ask about a person', example: '<em>Kes sa oled?</em> → <strong>Who are you?</strong>' },
	// 	{ questionWord: 'Mis?', meaning: 'What?', description: 'Used to ask about an object, action, or concept', example: '<em>Mis see on?</em> → <strong>What is this?</strong>' },
	// 	{ questionWord: 'Kelle?', meaning: 'Whose?', description: 'Used to ask about possession', example: '<em>Kelle auto see on?</em> → <strong>Whose car is this?</strong>' },
	// 	{ questionWord: 'Keda?', meaning: 'Whom? (object)', description: 'Used when someone is the object of an action', example: '<em>Keda sa nägid?</em> → <strong>Whom did you see?</strong>' },
	// 	{ questionWord: 'Mida?', meaning: 'What? (object)', description: 'Used when something is the object of an action', example: '<em>Mida sa sööd?</em> → <strong>What are you eating?</strong>' },
	// 	{ questionWord: 'Kus?', meaning: 'Where?', description: 'Used to ask about a location', example: '<em>Kus sa oled?</em> → <strong>Where are you?</strong>' },
	// 	{ questionWord: 'Kellel?', meaning: 'Who has?', description: 'Used to inquire about possession', example: '<em>Kellel on võti?</em> → <strong>Who has the key?</strong>' },
	// 	{ questionWord: 'Kellele?', meaning: 'To whom?', description: 'Used to ask about the recipient of an action', example: '<em>Kellele sa helistasid?</em> → <strong>To whom did you call?</strong>' },
	// 	{ questionWord: 'Kuhu?', meaning: 'Where to?', description: 'Used to ask about direction or destination', example: '<em>Kuhu sa lähed?</em> → <strong>Where are you going?</strong>' },
	// 	{ questionWord: 'Kellest?', meaning: 'About whom?', description: 'Used when talking about a person', example: '<em>Kellest te räägite?</em> → <strong>About whom are you talking?</strong>' },
	// 	{ questionWord: 'Kust?', meaning: 'From where?', description: 'Used to ask about the origin of something', example: '<em>Kust sa tuled?</em> → <strong>Where are you coming from?</strong>' },
	// 	{ questionWord: 'Kellena?', meaning: 'As who?', description: 'Used when referring to a role or occupation', example: '<em>Kellena sa töötad?</em> → <strong>As who do you work? (What is your job?)</strong>' },
	// 	{ questionWord: 'Kelleks?', meaning: 'Into whom?', description: 'Used when referring to transformation or becoming someone', example: '<em>Kelleks sa tahad saada?</em> → <strong>What do you want to become?</strong>' },
	// 	{ questionWord: 'Milleks?', meaning: 'For what? / Into what?', description: 'Used to ask about purpose or transformation', example: '<em>Milleks see on vajalik?</em> → <strong>For what is this necessary?</strong>' },
	// 	{ questionWord: 'Kelleta?', meaning: 'Without whom?', description: 'Used to indicate the absence of a person', example: '<em>Kas sa saad hakkama kelleta?</em> → <strong>Can you manage without someone?</strong>' },
	// 	{ questionWord: 'Milleta?', meaning: 'Without what?', description: 'Used to indicate the absence of something', example: '<em>Milleta sa ei saa elada?</em> → <strong>Without what can you not live?</strong>' },
	// 	{ questionWord: 'Kellega?', meaning: 'With whom?', description: 'Used to ask about companionship', example: '<em>Kellega sa lähed kinno?</em> → <strong>With whom are you going to the cinema?</strong>' },
	// 	{ questionWord: 'Millega?', meaning: 'With what?', description: 'Used to ask about means or instruments', example: '<em>Millega sa tööle lähed?</em> → <strong>With what (how) do you go to work?</strong>' },
	// 	{ questionWord: 'Mis kellast mis kellani?', meaning: 'From what time to what time?', description: 'Used to ask about duration', example: '<em>Mis kellast mis kellani sa töötad?</em> → <strong>From what time to what time do you work?</strong>' },
	// 	{ questionWord: 'Millal?', meaning: 'When?', description: 'Used to ask about time', example: '<em>Millal sa sünnipäeva tähistad?</em> → <strong>When do you celebrate your birthday?</strong>' },
	// 	{ questionWord: 'Kas?', meaning: 'Yes/No question marker', description: 'Used to form yes/no questions', example: '<em>Kas sa tuled homme?</em> → <strong>Are you coming tomorrow?</strong>' },
	// 	{ questionWord: 'Miks?', meaning: 'Why?', description: 'Used to ask for a reason', example: '<em>Miks sa hilinesid?</em> → <strong>Why were you late?</strong>' },
	// 	{ questionWord: 'Kui palju?', meaning: 'How much? / How many?', description: 'Used to ask about quantity or cost', example: '<em>Kui palju see maksab?</em> → <strong>How much does this cost?</strong>' },
	// 	{ questionWord: 'Kelle juurde?', meaning: 'To whose place?', description: 'Used when asking about movement towards a person', example: '<em>Kelle juurde sa lähed?</em> → <strong>To whose place are you going?</strong>' },
	// 	{ questionWord: 'Kelle juures?', meaning: 'At whose place?', description: 'Used when asking about being at someone\'s place', example: '<em>Kelle juures sa oled?</em> → <strong>At whose place are you?</strong>' },
	// 	{ questionWord: 'Kelle juurest?', meaning: 'From whose place?', description: 'Used when asking about leaving someone\'s place', example: '<em>Kelle juurest sa tulid?</em> → <strong>From whose place did you come?</strong>' },
	// 	{ questionWord: 'Mis kellaks?', meaning: 'By what time?', description: 'Used to ask about deadlines or expected times', example: '<em>Mis kellaks sa pead kodus olema?</em> → <strong>By what time do you have to be home?</strong>' },
	// ];

	const questionWordsData: QuestionRow[] = [
		{ questionWord: 'Kes?', meaning: translations.kes, description: translations.kes_description, example: translations.kes_example },
		{ questionWord: 'Mis?', meaning: translations.mis, description: translations.mis_description, example: translations.mis_example },
		{ questionWord: 'Kelle?', meaning: translations.kelle, description: translations.kelle_description, example: translations.kelle_example },
		{ questionWord: 'Keda?', meaning: translations.keda, description: translations.keda_description, example: translations.keda_example },
		{ questionWord: 'Mida?', meaning: translations.mida, description: translations.mida_description, example: translations.mida_example },
		{ questionWord: 'Kus?', meaning: translations.kus, description: translations.kus_description, example: translations.kus_example },
		{ questionWord: 'Kellel?', meaning: translations.kellel, description: translations.kellel_description, example: translations.kellel_example },
		{ questionWord: 'Kellele?', meaning: translations.kellele, description: translations.kellele_description, example: translations.kellele_example },
		{ questionWord: 'Kuhu?', meaning: translations.kuhu, description: translations.kuhu_description, example: translations.kuhu_example },
		{ questionWord: 'Kellest?', meaning: translations.kellest, description: translations.kellest_description, example: translations.kellest_example },
		{ questionWord: 'Kust?', meaning: translations.kust, description: translations.kust_description, example: translations.kust_example },
		{ questionWord: 'Kellena?', meaning: translations.kellena, description: translations.kellena_description, example: translations.kellena_example },
		{ questionWord: 'Kelleks?', meaning: translations.kelleks, description: translations.kelleks_description, example: translations.kelleks_example },
		{ questionWord: 'Milleks?', meaning: translations.milleks, description: translations.milleks_description, example: translations.milleks_example },
		{ questionWord: 'Kelleta?', meaning: translations.kelleta, description: translations.kelleta_description, example: translations.kelleta_example },
		{ questionWord: 'Milleta?', meaning: translations.milleta, description: translations.milleta_description, example: translations.milleta_example },
		{ questionWord: 'Kellega?', meaning: translations.kellega, description: translations.kellega_description, example: translations.kellega_example },
		{ questionWord: 'Millega?', meaning: translations.millega, description: translations.millega_description, example: translations.millega_example },
		{ questionWord: 'Mis kellast mis kellani?', meaning: translations.mis_kellast_mis_kellani, description: translations.mis_kellast_mis_kellani_description, example: translations.mis_kellast_mis_kellani_example },
		{ questionWord: 'Millal?', meaning: translations.millal, description: translations.millal_description, example: translations.millal_example },
		{ questionWord: 'Kas?', meaning: translations.kas, description: translations.kas_description, example: translations.kas_example },
		{ questionWord: 'Miks?', meaning: translations.miks, description: translations.miks_description, example: translations.miks_example },
		{ questionWord: 'Kui palju?', meaning: translations.kui_palju, description: translations.kui_palju_description, example: translations.kui_palju_example },
		{ questionWord: 'Kelle juurde?', meaning: translations.kelle_juurde, description: translations.kelle_juurde_description, example: translations.kelle_juurde_example },
		{ questionWord: 'Kelle juures?', meaning: translations.kelle_juures, description: translations.kelle_juures_description, example: translations.kelle_juures_example },
		{ questionWord: 'Kelle juurest?', meaning: translations.kelle_juurest, description: translations.kelle_juurest_description, example: translations.kelle_juurest_example },
		{ questionWord: 'Mis kellaks?', meaning: translations.mis_kellaks, description: translations.mis_kellaks_description, example: translations.mis_kellaks_example },
	];

	return (
		<div class="course-container">
			<h1 class="text-3xl font-bold mb-6">Estonian Language Course A2</h1>

			<LanguageSwitcher />
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<h2 class="text-2xl mb-4">{translations.verbToBe}</h2>
					<table>
						<thead>
							<tr>
								<th>{translations.pronoun}</th>
								<th>{translations.affirmative}</th>
								<th>{translations.negative}</th>
							</tr>
						</thead>
						<tbody>
							{beVerbData.map((row: TableRow, index: number) => (
								<tr key={index}>
									<td>{row.pronoun}</td>
									<td dangerouslySetInnerHTML={{ __html: row.affirmative }}></td>
									<td>{row.negative}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div>
					<h2 class="text-2xl mb-4">{translations.verbToUnderstand}</h2>
					<table>
						<thead>
							<tr>
								<th>{translations.pronoun}</th>
								<th>{translations.affirmative}</th>
								<th>{translations.negative}</th>
							</tr>
						</thead>
						<tbody>
							{understandVerbData.map((row: TableRow, index: number) => (
								<tr key={index}>
									<td>{row.pronoun}</td>
									<td dangerouslySetInnerHTML={{ __html: row.affirmative }} />
									<td>{row.negative}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<h2 class="text-2xl mb-4 mt-6">{translations.questionWord}</h2>
			<table>
				<thead>
					<tr>
						<th>{translations.questionWord}</th>
						<th>{translations.meaning}</th>
						<th>{translations.description}</th>
						<th>{translations.example}</th>
					</tr>
				</thead>
				<tbody>
					{questionWordsData.map((row, index) => (
						<tr key={index}>
							<td><strong>{row.questionWord}</strong></td>
							<td>{row.meaning}</td>
							<td>{row.description}</td>
							<td dangerouslySetInnerHTML={{ __html: row.example }} />
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

function Resource(props: { href: string; title: string; description: string }) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
