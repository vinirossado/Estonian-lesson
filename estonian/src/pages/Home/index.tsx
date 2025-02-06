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
		<div class="max-w-screen-2xl mx-auto bg-white shadow p-2">
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
