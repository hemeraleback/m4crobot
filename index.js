/*
    Creato da Hemerale#9590, con l'aiuto dei tutorial 
         di Giulioandcode https://bit.ly/3nqeMkG 
                                                            */
const Discord = require("discord.js")   //dichiarazione della libreria specifica per la creazione dei Bot per Discord
const ytch = require("yt-channel-info") //dichiarazione della libreria per prendere le informazioni da Youtube
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"] }
)

client.login("token");

// Array contenente tutti i titoli dei video di m4croxx 
let video =["guarda si PARTE e già la vita MI ODIA! - m4crovanilla #1", "guarda IRON e GRANO sono stati TROVATI! | m4crovanilla - ep 2", "guarda road to vittoria warzone su warzone!", "guarda la ultracraft ep 1!", "guarda Giochiamo a Fall guys tarocco - bro falls", "guarda Ho fatto il COLPO al DIAMOND CASINO' - GTA V", "guarda BEDWARS A CASO su HYPIXELS", "guarda CHE BELLA PIZZA! - cooking simulator", "guarda GUIDA e SPARATORIE su GTA per arrivare a 1M! - 1 Milione di V", "guarda ma se ANDASSIMO NEL NETHER? | m4crovanilla ep3", "guarda COME MAI ci sono dei VECCHETTI COSI'? - Just Die Alredy", "guarda 3 GIOCHI che l'umanità NON DOVEVA CONCEPIRE"];

// Avviso per quando il bot diventa online
client.on("ready", () => {
    console.log("il bot è ora online")
    client.user.setActivity("YGN", {type: 'WATCHING'});
});

// Messaggio di benvenuto agli utenti appena entrati
client.on("guildMemberAdd", (member) => {
    const ruolo = member.guild.roles.cache.find(r => r.name === 'User')
    member.roles.add(ruolo);
        
let embedbenvenuto = new Discord.MessageEmbed()
    .setTitle("Benvenuto 🤚")
    .setColor("#00FF00")
    .setDescription(`HEY! è entrato da noi <@${member.id}>, penso abbia sbagliato server... ti prego <@${member.id}> non uscire siamo soli :(`)
    .setImage("https://images-ext-2.discordapp.net/external/k1JCrsx1-syTOdPou3gZovS_sePviNcZBkv4AR4GcDc/https/cdn-longterm.mee6.xyz/plugins/welcome/images/740659333481758861/f5522a431af360aa56e92838847b5ad2bc8555948d4a5644408843420a55bb5b.png?width=1193&height=671")

    client.channels.cache.get("745672023212163113").send({ embeds: [embedbenvenuto] })

let embedbenvenutodm = new Discord.MessageEmbed()
    .setTitle("Perfavore")
    .setColor("#7004FC")
    .setDescription(`Resta nel server ti prego siamo soli forse se siamo in tanti karen mi riporta i figli a casa... vabbè comunque ora che sei nel server puoi avere aggiornamenti sui video youtube e twitch di m4croxx :)`)
    .setImage("https://images-ext-2.discordapp.net/external/k1JCrsx1-syTOdPou3gZovS_sePviNcZBkv4AR4GcDc/https/cdn-longterm.mee6.xyz/plugins/welcome/images/740659333481758861/f5522a431af360aa56e92838847b5ad2bc8555948d4a5644408843420a55bb5b.png?width=1193&height=671")
            
    member.send({ embeds: [embedbenvenutodm] })
    console.log(member);
});

// Saluto agli utenti appena usciti
client.on("guildMemberRemove", (member) => {

    client.channels.cache.get("745671163212070912").send(`<@${member.id}> è uscito... -1 :( `);
    console.log(member);
});

// Commandi personalizzati
client.on("message", (message) => {
    if (message.content.toLowerCase() == "che cosa guardo?") {
        message.channel.send(video[Math.floor(Math.random() * video.length)]);
    }   else if (message.content == "banana") {
        message.react(`🍌`)
    }
})

// Sistema di moderazione
client.on("messageCreate", message => {
    if (message.channel.type == "DM") return

    if (message.member.roles.cache.has("idRuolo1") || message.member.roles.cache.has("idRuolo2")) return

    var parolacce = ["dlcorcl", "discord-gi", "nitrofree", "dio", "madonna", "gesù", "gesu", "sant", "porco", "froci", "nigg", "negr", "faggot", "coglion", "ritardat", "stronz"]
    var trovata = false;

    parolacce.forEach(parola => {
        if (message.content.toLowerCase().includes(parola.toLowerCase())) {
            trovata = true;
        }
    })

    if (trovata) {
        message.delete();
    }
});

/* Messaggio contenente un embed con le regole del server
        client.on("messageCreate", (message) => {
        if (message.content == "regole") {
            var embed = new Discord.MessageEmbed()
                .setTitle("REGOLE")
                .setColor("00FF00")
                .setDescription(`
1. Sii rispettoso (può portare il ban)
Devi rispettare tutti gli utenti, indipendentemente dai tuoi gusti nei loro confronti. Tratta gli altri come vorresti essere trattato.
(1a. ovviamente l'ironia può essere accettata, dipende dal contesto)
2. Nessun linguaggio inappropriato (può portare il ban)
L'uso di volgarità non è proibito ma è consigliabile limitarla. Tuttavia, è vietato qualsiasi linguaggio dispregiativo nei confronti di qualsiasi utente.
(2a. Questo include il divieto atteggiamenti discriminatori o minaccie di morte)
3. Nessuna pubblicità (time out di 1 settimana, se succede una seconda volta ban)
Non spammare il tuo canale o profilo in altri canali oltre al canale apposito
4. Nessun materiale NSFW (BAN)
Questo è un server della community di m4croxx e non intende condividere questo tipo di materiale.
5. Niente spam di messaggi privi di senso (BAN)
non è consentito spammare messaggi, anche se non ci sarà nessuna slowmode, il bot ti muterà in automatico per non infastidire nessuno
6. Nessun nome e immagine del profilo offensivi (WARN e poi BAN)
Ti verrà chiesto di cambiare il tuo nome o la tua immagine se lo staff li ritiene inappropriati.
7. Raid al server (ISTANT BAN)
Non sono consentiti raid o menzioni di raid.
8. Minacce dirette e indirette (ISTANT BAN)
Le minacce ad altri utenti di DDoS, Violenze, DoX e altre minacce dannose sono assolutamente vietate.
9. Argomenti Sensibili
Parlare di argomenti sensibili come orientamenti politici o religiosi è sconsigliato, anche se finché non offensivo verso nessuno è consentito
(9a. Non è possibile revocare le punizioni intraprese dagli admin in situazioni simili, avete la libertà di parlare di quel che preferite ma vi prendete la responsabilità.)
(9b. Le possibilità che vengano assegnate punizioni di gruppo in base alle infrazioni commesse aumentano, e anche in questo caso sono irrevocabili.)
10. No a argomenti legati a attività illegali
Ciò include tutti i crimini previsti dalla legge italiana, e il server non si assume nessuna responsabilità dei possibili argomenti trattati dai membri.
(10a. Gli Admin si riservano il diritto di analizzare ogni situazione e selezionare la giusta punizione, che in ogni caso è irrevocabile.)
(10b. I membri che sentono parlare di possibili argomenti che violano queste regole sono tenuti a segnalarlo, in modo da evitare punizioni ingiuste.)
11. Usa i canali rispettando il loro topic (solo elimino dei messaggi, poi può portare a brevi time out)
Ad esempio nella chat generale sei libero di parlare di quel che preferisci, ma in una chat dedicata bisogna seguire il suo argomento.
12. Mantieni la calma nei canali vocali (ruolo mutato, porta fino al ban permanente)
Questo include il divieto di sovrapporre la tua voce a quelle altrui eccessivamente, di urlare o fare errape.
(12a. In casi come questo è consigliato segnalare l'utente allo staff e corredare testimoni.)
(12b. Situazioni simili sono altamente situazionali quindi c'è da aspettarsi diverse segnalazioni prima di assegnare punizioni effettive al utente.)
(12c. Soundboard e modifiche vocali non sono bannabili se non altamente fastidiose, ad esempio non bisogna spammare le soundboard)
                `)
    
            message.channel.send({ embeds: [embed] })
        }
    })
*/
