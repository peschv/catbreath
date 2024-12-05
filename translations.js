/*
 *  Translates the following languages: 
 *      English, Spanish, French, German, Czech, Danish, Dutch, Finnish, Greek, Hungarian, 
 *      Italian, Norwegian, Polish, Portuguese (Brazil), Portuguese (Portugal), Russian, 
 *      Swedish, Thai, Turkish, Japanese, Korean, and Chinese (Simplified).
*/
const translations = {
    en: {  // English (default). 
        description:"The iOS app for monitoring heart health by taking breaths per minute readings.",
        faq:"Frequently Asked Questions",
        q1:"How and when should I measure my cat's breathing?",
        a1:"Ideally when the cat is at rest or asleep. Each time the cat either inhales or exhales, simply tap " + 
        "the lungs icon on the Breath Monitor. After 30 seconds, the timer will stop and your cat's results will appear on the screen.",
        q2:"How does the app calculate the breathing rate?",
        a2:"The app counts down from 30 seconds, and multiplies it by 2 to get the number of breaths per minute.",
        q3:"Why monitor my cat's breathing?",
        a3:"Respiratory issues can be an indicator of heart health, and may detect potential issues early.",
        q4:"What if my cat's breathing rate is high?",
        a4:"Always consult your veterinarian.",
        q5:"Is data collected from the app?",
        a5:"No, the app does not collect data. All data is stored on your phone.",
        q6:"Can I use the app for other pets?",
        a6:"While the app is designed for cats, it can absolutely be used for other pets.",
        q7:"What should I do if I have technical issues?",
        a7:"Try restarting the app and/or your phone, or contact us below for assistance. We're always happy to help!",
        privacy:"Privacy Policy",
        privacycontent:"This app uses Google AdMob to serve advertisements. Through the AdMob SDK,this app may collect the " + 
        "following data: IP addresses, device identifiers (such as advertising IDs), and usage data (including app " +
        "interactions and crash logs). The information collected is used to improve services, provide personalized " + 
        "advertisements, and conduct analytics. Google may share this user data with third-party advertisers. Users " + 
        "can opt-out of personalized advertising by adjusting privacy settings on your device or through your Google " + 
        "account. For more information on how Google handles user data, please refer to Google's Privacy Policy at https://policies.google.com/privacy.",
        contact:"Contact Us",
        email:"Email",
        message:"Message",
        send:"Send"
    },
    es: { // Spanish translation. 
        description:"La aplicación de iOS para monitorear la salud del corazón tomando lecturas de respiraciones por minuto.",
        faq:"Preguntas Frecuentes",
        q1:"¿Cómo y cuándo debo medir la respiración de mi gato?",
        a1:"Idealmente cuando el gato está en reposo o durmiendo. Cada vez que el gato inhala o exhala, simplemente toca el ícono " + 
        "de los pulmones en el Monitor de Respiración. Después de 30 segundos, el temporizador se detendrá y los resultados de tu gato aparecerán en la pantalla.",
        q2:"¿Cómo calcula la aplicación la tasa de respiración?",
        a2:"La aplicación cuenta regresivamente desde 30 segundos y multiplica por 2 para obtener el número de respiraciones por minuto.",
        q3:"¿Por qué monitorear la respiración de mi gato?",
        a3:"Los problemas respiratorios pueden ser un indicador de la salud del corazón y pueden detectar problemas potenciales a tiempo.",
        q4:"¿Qué pasa si la tasa de respiración de mi gato es alta?",
        a4:"Siempre consulta a tu veterinario.",
        q5:"¿Se recopilan datos de la aplicación?",
        a5:"No, la aplicación no recopila datos. Todos los datos se almacenan en tu teléfono.",
        q6:"¿Puedo usar la aplicación para otras mascotas?",
        a6:"Aunque la aplicación está diseñada para gatos, también se puede usar para otras mascotas.",
        q7:"¿Qué debo hacer si tengo problemas técnicos?",
        a7:"Intenta reiniciar la aplicación y/o tu teléfono, o contáctanos a continuación para obtener ayuda. ¡Siempre estamos felices de ayudar!",
        privacy:"Política de Privacidad",
        privacycontent:"Esta aplicación utiliza Google AdMob para servir anuncios. A través del SDK de AdMob, esta " + 
        "aplicación puede recopilar los siguientes datos: direcciones IP, identificadores de dispositivos (como " + 
        "identificadores de publicidad) y datos de uso (incluidas las interacciones con la aplicación y los " + 
        "registros de fallos). La información recopilada se utiliza para mejorar los servicios, proporcionar " + 
        "anuncios personalizados y realizar análisis. Google puede compartir estos datos de usuario con " + 
        "anunciantes de terceros. Los usuarios pueden optar por no recibir publicidad personalizada ajustando " + 
        "la configuración de privacidad en su dispositivo o a través de su cuenta de Google. Para obtener más " + 
        "información sobre cómo Google maneja los datos de usuario, consulte la Política de Privacidad de " + 
        "Google en https://policies.google.com/privacy.",
        contact:"Contáctenos",
        email:"Correo electrónico:",
        message:"Mensaje:",
        send:"Enviar"
    },
    fr: { // French translation. 
        description:"L'application iOS pour surveiller la santé cardiaque en prenant des mesures de la fréquence respiratoire par minute.",
        faq:"Questions Fréquemment Posées",
        q1:"Comment et quand devrais-je mesurer la respiration de mon chat ?",
        a1:"Idéalement lorsque le chat est au repos ou endormi. Chaque fois que le chat inhale ou expire, il suffit " + 
        "d'appuyer sur l'icône des poumons sur le Moniteur de Respiration. Après 30 secondes, le minuteur s'arrêtera et les résultats de votre chat apparaîtront à l'écran.",
        q2:"Comment l'application calcule-t-elle le taux de respiration ?",
        a2:"L'application compte à rebours pendant 30 secondes et multiplie par 2 pour obtenir le nombre de respirations par minute.",
        q3:"Pourquoi surveiller la respiration de mon chat ?",
        a3:"Les problèmes respiratoires peuvent être un indicateur de la santé cardiaque et peuvent détecter des problèmes potentiels tôt.",
        q4:"Que faire si le taux de respiration de mon chat est élevé ?",
        a4:"Consultez toujours votre vétérinaire.",
        q5:"Des données sont-elles collectées par l'application ?",
        a5:"Non, l'application ne collecte pas de données. Toutes les données sont stockées sur votre téléphone.",
		q6:"Puis-je utiliser l'application pour d'autres animaux ?",
		a6:"Bien que l'application soit conçue pour les chats, elle peut tout à fait être utilisée pour d'autres animaux.", 
		q7:"Que dois-je faire si j'ai des problèmes techniques ?", 
		a7:"Essayez de redémarrer l'application et/ou votre téléphone ou contactez-nous ci-dessous pour obtenir de l'aide. Nous sommes toujours heureux d'aider !", 
        privacy:"Politique de Confidentialité",
        privacycontent:"Cette application utilise Google AdMob pour diffuser des annonces. Grâce au SDK AdMob, cette " + 
        "application peut collecter les données suivantes : adresses IP, identifiants de dispositifs (tels que les " + 
        "identifiants publicitaires) et données d'utilisation (y compris les interactions avec l'application et les " + 
        "journaux de plantage). Les informations collectées sont utilisées pour améliorer les services, fournir des " + 
        "annonces personnalisées et effectuer des analyses. Google peut partager ces données utilisateur avec des " + 
        "annonceurs tiers. Les utilisateurs peuvent choisir de ne pas recevoir de publicité personnalisée en ajustant " + 
        "les paramètres de confidentialité sur leur appareil ou via leur compte Google. Pour plus d'informations sur " + 
        "la manière dont Google traite les données des utilisateurs, veuillez consulter la Politique de Confidentialité " + 
        "de Google à l'adresse https://policies.google.com/privacy.",
        contact:"Contactez-nous", 
		email:"Email", 
		message:"Message", 
		send:"Envoyer"
    },
    de: { // German translation. 
		description:"Die iOS-App zur Überwachung der Herzgesundheit durch das Messen der Atemzüge pro Minute.", 
		faq:"Häufig gestellte Fragen", 
		q1:"Wie und wann sollte ich die Atmung meiner Katze messen?", 
		a1:"Idealerweise wenn die Katze ruht oder schläft. Jedes Mal wenn die Katze einatmet oder ausatmet, " + 
        "tippen Sie einfach auf das Lungen-Symbol im Atemmonitor. Nach 30 Sekunden stoppt der Timer und die Ergebnisse Ihrer Katze erscheinen auf dem Bildschirm.", 
		q2:"Wie berechnet die App die Atemfrequenz?", 
		a2:"Die App zählt 30 Sekunden herunter und multipliziert mit 2 um die Anzahl der Atemzüge pro Minute zu erhalten.", 
		q3:"Warum sollte ich die Atmung meiner Katze überwachen?", 
		a3:"Atemprobleme können ein Indikator für die Herzgesundheit sein und frühzeitig potenzielle Probleme erkennen.", 
		q4:"Was soll ich tun wenn die Atemfrequenz meiner Katze hoch ist?", 
		a4:"Konsultieren Sie immer Ihren Tierarzt.", 
		q5:"Werden Daten von der App gesammelt?", 
		a5:"Nein, die App sammelt keine Daten. Alle Daten werden auf Ihrem Telefon gespeichert.", 
		q6:"Kann ich die App auch für andere Haustiere verwenden?", 
		a6:"Obwohl die App für Katzen entwickelt wurde kann sie auch für andere Haustiere verwendet werden.", 
		q7:"Was soll ich tun wenn ich technische Probleme habe?", 
		a7:"Versuchen Sie die App und/oder Ihr Telefon neu zu starten oder kontaktieren Sie uns unten für Unterstützung. Wir helfen Ihnen gerne weiter!", 
        privacy: "Datenschutzerklärung",
        privacycontent: "Diese App verwendet Google AdMob, um Anzeigen zu schalten. Über das AdMob SDK kann " + 
        "diese App die folgenden Daten sammeln: IP-Adressen, Geräteidentifikatoren (wie Werbe-IDs) und " + 
        "Nutzungsdaten (einschließlich App-Interaktionen und Absturzprotokolle). Die gesammelten Informationen " + 
        "werden verwendet, um Dienstleistungen zu verbessern, personalisierte Werbung bereitzustellen und Analysen " + 
        "durchzuführen. Google kann diese Benutzerdaten mit Drittwerbern teilen. Benutzer können sich von " + 
        "personalisierter Werbung abmelden, indem sie die Datenschutzeinstellungen auf ihrem Gerät oder über " + 
        "ihr Google-Konto anpassen. Für weitere Informationen darüber, wie Google mit Benutzerdaten umgeht, lesen " + 
        "Sie bitte die Datenschutzerklärung von Google unter https://policies.google.com/privacy.",
        contact:"Kontaktiere uns", 
		email:"E-Mail", 
		message:"Nachricht", 
		send:"Senden"
    },
    cs: { // Czech translation. 
    	description:"Aplikace pro iOS pro sledování zdraví srdce pomocí měření dechů za minutu.",     
    	faq:"Často kladené dotazy",     
    	q1:"Jak a kdy bych měl měřit dýchání mé kočky?",     
    	a1:"Ideálně když je kočka v klidu nebo spí. Každýkrát když kočka vdechne nebo vydechne " + 
        "stačí klepnout na ikonu plic na monitoru dýchání. Po 30 sekundách se časovač zastaví a výsledky vaší kočky se zobrazí na obrazovce.",     
    	q2:"Jak aplikace vypočítá dýchací frekvenci?",     
    	a2:"Aplikace odpočítává 30 sekund a násobí to dvěma abyste dostali počet dechů za minutu.",     
    	q3:"Proč sledovat dýchání mé kočky?",     
    	a3:"Problémy s dýcháním mohou být indikátorem zdraví srdce a mohou včas odhalit potenciální problémy.",     
    	q4:"Co mám dělat když je dýchací frekvence mé kočky vysoká?",     
    	a4:"Vždy se poraďte se svým veterinářem.",     
    	q5:"Jsou z aplikace shromažďovány údaje?",     
    	a5:"Ne aplikace neshromažďuje žádné údaje. Všechny údaje jsou uloženy ve vašem telefonu.",     
    	q6:"Mohu aplikaci použít i pro jiná zvířata?",     
    	a6:"I když je aplikace navržena pro kočky může být také použita pro jiná zvířata.",     
    	q7:"Co mám dělat když mám technické problémy?",     
    	a7:"Zkuste restartovat aplikaci nebo telefon nebo nás kontaktujte níže pro pomoc. Vždy rádi pomůžeme!",     
        privacy: "Zásady ochrany osobních údajů",
        privacycontent: "Tato aplikace používá Google AdMob k zobrazování reklam. Prostřednictvím SDK AdMob " + 
        "může tato aplikace shromažďovat následující údaje: IP adresy, identifikátory zařízení (například reklamní " + 
        "ID) a údaje o používání (včetně interakcí s aplikací a protokolů chyb). Shromážděné informace se používají " + 
        "ke zlepšení služeb, poskytování personalizovaných reklam a provádění analýz. Google může tyto uživatelské " + 
        "údaje sdílet s třetími stranami, které poskytují reklamy. Uživatelé se mohou odhlásit z personalizované " + 
        "reklamy úpravou nastavení ochrany soukromí na svém zařízení nebo prostřednictvím svého účtu Google. Pro " + 
        "více informací o tom, jak Google zpracovává uživatelská data, prosím odkazujte na Zásady ochrany osobních " + 
        "údajů společnosti Google na adrese https://policies.google.com/privacy.",
        contact:"Kontaktujte nás",     
    	email:"E-mail",     
    	message:"Zpráva",     
    	send:"Odeslat"    
    },
    da: { // Danish translation. 
      description:"iOS-appen til at overvåge hjertehelsen ved at tage målinger af vejrtrækninger pr. minut.",
      faq:"Ofte stillede spørgsmål",
      q1:"Hvordan og hvornår skal jeg måle min kats vejrtrækning?",
      a1:"Ideelt set når katten er i hvile eller sover. Hver gang katten indånder eller udånder skal du blot " +
      "trykke på lungeikonet på åndedrætsmonitoren. Efter 30 sekunder stopper timeren og din kats resultater vises på skærmen.",
      q2:"Hvordan beregner appen vejrtrækningsfrekvensen?",
      a2:"Appen tæller ned fra 30 sekunder og ganger med 2 for at få antallet af åndedrag pr. minut.",
      q3:"Hvorfor overvåge min kats vejrtrækning?",
      a3:"Åndedrætsproblemer kan være en indikator for hjertehelse og kan tidligt opdage potentielle problemer.",
      q4:"Hvad hvis min kats vejrtrækningsfrekvens er høj?",
      a4:"Konsulter altid din dyrlæge.",
      q5:"Indsamles der data fra appen?",
      a5:"Nej appen indsamler ikke data. Alle data gemmes på din telefon.",
      q6:"Kan jeg bruge appen til andre kæledyr?",
      a6:"Selvom appen er designet til katte kan den absolut bruges til andre kæledyr.",
      q7:"Hvad skal jeg gøre hvis jeg har tekniske problemer?",
      a7:"Prøv at genstarte appen og/eller din telefon eller kontakt os nedenfor for hjælp. Vi er altid glade for at hjælpe!",  
      privacy: "Privatlivspolitik",
      privacycontent: "Denne app bruger Google AdMob til at vise annoncer. Gennem AdMob SDK kan denne app " + 
      "indsamle følgende data: IP-adresser, enhedsidentifikatorer (såsom reklame-ID'er) og brugsdata (herunder " + 
      "app-interaktioner og fejllogs). De indsamlede oplysninger bruges til at forbedre tjenester, levere " + 
      "personlige annoncer og udføre analyser. Google kan dele disse brugerdata med tredjepartsannoncører. " + 
      "Brugere kan fravælge personaliseret annoncering ved at justere privatlivsindstillingerne på deres enhed " + 
      "eller gennem deres Google-konto. For mere information om, hvordan Google håndterer brugerdata, henvises " + 
      "der til Googles Privatlivspolitik på https://policies.google.com/privacy.",
      contact:"Kontakt os",  
      email:"E-mail",  
      message:"Besked",  
      send:"Send"    
    },    
    nl: { // Dutch translation.    
      description:"De iOS-app voor het monitoren van de hartgezondheid door het meten van ademhalingen per minuut.",    
      faq:"Veelgestelde vragen",    
      q1:"Hoe en wanneer moet ik het ademhalen van mijn kat meten?",    
      a1:"Bij voorkeur wanneer de kat rust of slaapt. Elke keer dat de kat in- of uitademt hoeft u alleen maar " + 
      "op het longpictogram op de ademhalingsmonitor te tikken. Na 30 seconden stopt de timer en verschijnen de resultaten van uw kat op het scherm.",    
      q2:"Hoe berekent de app het ademhalingspercentage?",    
      a2:"De app telt af van 30 seconden en vermenigvuldigt dit met 2 om het aantal ademhalingen per minuut te krijgen.",    
      q3:"Waarom moet ik het ademhalen van mijn kat volgen?",    
      a3:"Ademhalingsproblemen kunnen een indicator zijn voor hartgezondheid en kunnen vroegtijdig potentiële problemen detecteren.",    
      q4:"Wat als het ademhalingspercentage van mijn kat hoog is?",    
      a4:"Raadpleeg altijd uw dierenarts.",    
      q5:"Worden er gegevens verzameld door de app?",    
      a5:"Nee, de app verzamelt geen gegevens. Alle gegevens worden op uw telefoon opgeslagen.",    
      q6:"Kan ik de app ook voor andere huisdieren gebruiken?",
      a6:"Hoewel de app is ontworpen voor katten kan deze absoluut worden gebruikt voor andere huisdieren.",
      q7:"Wat moet ik doen als ik technische problemen heb?",
      a7:"Probeer de app en/of uw telefoon opnieuw op te starten of neem contact met ons op voor hulp. We helpen u altijd graag!",
      privacy: "Privacyverklaring",
      privacycontent: "Deze app gebruikt Google AdMob om advertenties weer te geven. Via de AdMob SDK kan deze " + 
      "app de volgende gegevens verzamelen: IP-adressen, apparaatsidentifiers (zoals advertentie-ID's) en " + 
      "gebruiksgegevens (inclusief app-interacties en foutlogboeken). De verzamelde informatie wordt gebruikt " + 
      "om diensten te verbeteren, gepersonaliseerde advertenties te bieden en analyses uit te voeren. Google " + 
      "kan deze gebruikersgegevens delen met derde partijen die advertenties aanbieden. Gebruikers kunnen zich " + 
      "afmelden voor gepersonaliseerde advertenties door de privacy-instellingen op hun apparaat aan te passen " + 
      "of via hun Google-account. Voor meer informatie over hoe Google omgaat met gebruikersgegevens, verwijzen " + 
      "wij naar de Privacyverklaring van Google op https://policies.google.com/privacy.",
      contact:"Neem contact met ons op",
      email:"E-mail",
      message:"Bericht",
      send:"Verzenden"
    },   
    fi: { // Finnish translation.  
       description:"iOS-sovellus sydänterveyden seuraamiseen hengitysten minuutissa lukemien avulla.",   
       faq:"Usein kysytyt kysymykset",   
       q1:"Kuinka ja milloin minun pitäisi mitata kissani hengitystä?",   
       a1:"Ihanteellisesti kun kissa on levossa tai nukkuu. Joka kerta kun kissa hengittää sisään tai ulos " + 
       "napauta vain keuhkoikonia Hengityksenvalvonnassa. Kolmenkymmenen sekunnin kuluttua ajastin pysähtyy ja kissasi tulokset näkyvät näytöllä.",   
       q2:"Kuinka sovellus laskee hengitystaajuuden?",   
       a2:"Sovellus laskee kolmekymmentä sekuntia ja kertoo sen kahdella saadakseen hengityksiä minuutissa.",   
       q3:"Miksi seurata kissani hengitystä?",   
       a3:"Hengitysvaikeudet voivat olla sydämen terveyden indikaattori ja voivat havaita mahdollisia ongelmia varhain.",   
       q4:"Entä jos kissani hengitystaajuus on korkea?",   
       a4:"Kysy aina eläinlääkäriltäsi.",   
       q5:"Kerätäänkö sovelluksesta tietoja?",   
       a5:"Ei sovellus ei kerää tietoja. Kaikki tiedot tallennetaan puhelimeesi.",   
       q6:"Voinko käyttää sovellusta muille lemmikeille?",   
       a6:"Vaikka sovellus on suunniteltu kissoille se voi ehdottomasti olla käytössä muille lemmikeille.",   
       q7:"Mitä teen jos minulla on teknisiä ongelmia?",   
       a7:"Yritä käynnistää sovellus ja/tai puhelin uudelleen tai ota meihin yhteyttä alla saadaksesi apua. " + 
       "Olemme aina iloisia voidessamme auttaa!",   
       privacy:"Tietosuojakäytäntö",
       privacycontent:"Tämä sovellus käyttää Google AdMobia mainosten näyttämiseen. AdMob SDK:n kautta tämä " + 
       "sovellus voi kerätä seuraavia tietoja: IP-osoitteet, laiteidentifikaattorit (kuten mainos-ID:t) ja " + 
       "käyttödata (mukaan lukien sovelluksen vuorovaikutukset ja kaatumislokit). Kerättyä tietoa käytetään " + 
       "palvelujen parantamiseen, personoitujen mainosten tarjoamiseen ja analytiikan tekemiseen. Google voi " + 
       "jakaa näitä käyttäjätietoja kolmansien osapuolten mainostajien kanssa. Käyttäjät voivat kieltäytyä " + 
       "personoiduista mainoksista säätämällä yksityisyysasetuksia laitteellaan tai Google-tilinsä kautta. " + 
       "Lisätietoja siitä, miten Google käsittelee käyttäjätietoja, löytyy Googlen Tietosuojakäytännöstä " + 
       "osoitteessa https://policies.google.com/privacy.",
       contact:"Ota yhteyttä",   
       email:"Sähköposti",   
       message:"Viesti",   
       send:"Lähetä" 
    },   
    el: { // Greek translation.
        description:"Η εφαρμογή iOS για την παρακολούθηση της καρδιακής υγείας μετρώντας τις αναπνοές ανά λεπτό.",
        faq:"Συχνές ερωτήσεις",
        q1:"Πώς και πότε πρέπει να μετρήσω την αναπνοή της γάτας μου;",
        a1:"Ιδανικά όταν η γάτα είναι σε ηρεμία ή κοιμάται. Κάθε φορά που η γάτα εισπνέει ή εκπνέει " + 
        "απλά πατήστε το εικονίδιο των πνευμόνων στον παρακολουθητή αναπνοής. Μετά από 30 δευτερόλεπτα ο " + 
        "χρονοδιακόπτης θα σταματήσει και τα αποτελέσματα της γάτας σας θα εμφανιστούν στην οθόνη.",
        q2:"Πώς υπολογίζει η εφαρμογή το ποσοστό αναπνοής;",
        a2:"Η εφαρμογή μετράει αντίστροφα για 30 δευτερόλεπτα και πολλαπλασιάζει με το 2 για να βρει τον αριθμό των αναπνοών ανά λεπτό.",
        q3:"Γιατί να παρακολουθώ την αναπνοή της γάτας μου;",
        a3:"Τα προβλήματα αναπνοής μπορεί να είναι δείκτης καρδιοαγγειακής υγείας και μπορεί να ανιχνεύσουν πιθανά προβλήματα νωρίς.",
        q4:"Τι πρέπει να κάνω αν ο ρυθμός αναπνοής της γάτας μου είναι υψηλός;",
        a4:"Πάντα να συμβουλεύεστε τον κτηνίατρό σας.",
        q5:"Συλλέγονται δεδομένα από την εφαρμογή;",
        a5:"Όχι η εφαρμογή δεν συλλέγει δεδομένα. Όλα τα δεδομένα αποθηκεύονται στο τηλέφωνό σας.",
        q6:"Μπορώ να χρησιμοποιήσω την εφαρμογή για άλλα κατοικίδια;",
        a6:"Ενώ η εφαρμογή έχει σχεδιαστεί για γάτες μπορεί σίγουρα να χρησιμοποιηθεί και για άλλα κατοικίδια.",
        q7:"Τι πρέπει να κάνω αν έχω τεχνικά προβλήματα;",
        a7:"Προσπαθήστε να επανεκκινήσετε την εφαρμογή και/ή το τηλέφωνό σας ή επικοινωνήστε μαζί μας παρακάτω για βοήθεια. Είμαστε πάντα πρόθυμοι να βοηθήσουμε!",
        privacy:"Πολιτική Απορρήτου",
        privacycontent:"Αυτή η εφαρμογή χρησιμοποιεί το Google AdMob για την προβολή διαφημίσεων. Μέσω του SDK " + 
        "AdMob, αυτή η εφαρμογή μπορεί να συλλέξει τα εξής δεδομένα: διευθύνσεις IP, αναγνωριστικά συσκευών (όπως " + 
        "αναγνωριστικά διαφήμισης) και δεδομένα χρήσης (συμπεριλαμβανομένων των αλληλεπιδράσεων με την εφαρμογή " + 
        "και των αρχείων καταγραφής σφαλμάτων). Οι πληροφορίες που συλλέγονται χρησιμοποιούνται για τη βελτίωση " + 
        "των υπηρεσιών, την παροχή εξατομικευμένων διαφημίσεων και τη διεξαγωγή αναλύσεων. Η Google μπορεί να " + 
        "μοιραστεί αυτά τα δεδομένα χρηστών με τρίτους διαφημιστές. Οι χρήστες μπορούν να επιλέξουν να μην " + 
        "λαμβάνουν εξατομικευμένες διαφημίσεις προσαρμόζοντας τις ρυθμίσεις απορρήτου στη συσκευή τους ή μέσω " + 
        "του λογαριασμού τους Google. Για περισσότερες πληροφορίες σχετικά με το πώς η Google χειρίζεται τα " + 
        "δεδομένα χρηστών, παρακαλώ ανατρέξτε στην Πολιτική Απορρήτου της Google στη διεύθυνση https://policies.google.com/privacy.",
        contact:"Επικοινωνήστε μαζί μας",
        email:"Email",
        message:"Μήνυμα",
        send:"Αποστολή"
     },
     hu: { // Hungarian translation.
       description:"Az iOS alkalmazás a szív egészségének nyomon követésére légzésszám mérésekkel percenként.",
       faq:"Gyakran Ismételt Kérdések",
       q1:"Hogyan és mikor kell mérnem a macskám légzését?",
       a1:"Ideális esetben amikor a macska pihen vagy alszik. Minden alkalommal, amikor a macska belélegzik vagy " + 
       "kilélegzik, egyszerűen érintse meg a tüdő ikont a Légzésfigyelőn. 30 másodperc elteltével az időzítő leáll és macskája eredményei megjelennek a képernyőn.",
       q2:"Hogyan számolja ki az alkalmazás a légzési arányt?",
       a2:"Az alkalmazás visszaszámlál 30 másodpercről és megszorozza kettővel, hogy megkapja az egy perc alatt végzett lélegzetek számát.",
       q3:"Miért érdemes figyelni a macskám légzését?",
       a3:"A légzési problémák jelezhetik a szív egészségét és korai stádiumban észlelhetik az esetleges problémákat.",
       q4:"Mi van akkor, ha macskám légzési aránya magas?",
       a4:"Mindig konzultáljon állatorvosával.",
       q5:"Gyűjt adatokat az alkalmazás?",
       a5:"Nem, az alkalmazás nem gyűjt adatokat. Minden adat az Ön telefonján tárolódik.",
       q6:"Használhatom az alkalmazást más háziállatokhoz?",
       a6:"Bár az alkalmazás macskák számára készült, más háziállatokhoz is használható.",
       q7:"Mit tegyek, ha technikai problémáim vannak?",
       a7:"Próbálja meg újraindítani az alkalmazást és/vagy telefonját, vagy lépjen kapcsolatba velünk alább segítségért. Mindig örömmel segítünk!",
       privacy:"Adatvédelmi Szabályzat",
       privacycontent:"Ez az alkalmazás a Google AdMob-ot használja hirdetések megjelenítésére. Az AdMob " + 
       "SDK-n keresztül ez az alkalmazás a következő adatokat gyűjtheti: IP-címek, eszközazonosítók (például " + 
       "hirdetési azonosítók) és használati adatok (beleértve az alkalmazással való interakciókat és a " + 
       "hibajelentéseket). A gyűjtött információkat a szolgáltatások javítására, személyre szabott " + 
       "hirdetések biztosítására és elemzések végzésére használják. A Google megoszthatja ezeket a " + 
       "felhasználói adatokat harmadik fél hirdetőkkel. A felhasználók leiratkozhatnak a személyre " + 
       "szabott hirdetésekről az eszközük adatvédelmi beállításainak módosításával vagy " + 
       "Google-fiókjukon keresztül. További információkért arról, hogy a Google hogyan kezeli a " + 
       "felhasználói adatokat, kérjük, olvassa el a Google Adatvédelmi Szabályzatát a következő címen: https://policies.google.com/privacy.",
       contact:"Kapcsolatfelvétel",
       email:"Email",
       message:"Üzenet",
       send:"Küldés"
     },
     it: { // Italian translation.
        description:"L'app iOS per monitorare la salute del cuore tramite la misurazione delle respirazioni al minuto.",
        faq:"Domande Frequenti",
        q1:"Come e quando dovrei misurare la respirazione del mio gatto?",
        a1:"Ideale quando il gatto è a riposo o dorme. Ogni volta che il gatto inspira o espira, basta toccare " + 
        "l'icona dei polmoni sul Monitor della Respirazione. Dopo 30 secondi, il timer si fermerà e i risultati del tuo gatto appariranno sullo schermo.",
        q2:"Come calcola l'app il tasso di respirazione?",
        a2:"L'app conta alla rovescia per 30 secondi e moltiplica per 2 per ottenere il numero di respiri al minuto.",
        q3:"Perché monitorare la respirazione del mio gatto?",
        a3:"I problemi respiratori possono essere un indicatore della salute del cuore e possono rilevare potenziali problemi precocemente.",
        q4:"Cosa devo fare se il tasso di respirazione del mio gatto è alto?",
        a4:"Consulta sempre il tuo veterinario.",
        q5:"I dati vengono raccolti dall'app?",
        a5:"No, l'app non raccoglie dati. Tutti i dati sono memorizzati sul tuo telefono.",
        q6:"Posso usare l'app per altri animali domestici?",
        a6:"Sebbene l'app sia progettata per gatti, può assolutamente essere utilizzata per altri animali domestici.",
        q7:"Cosa devo fare se ho problemi tecnici?",
        a7:"Prova a riavviare l'app e/o il telefono, oppure contattaci qui sotto per assistenza. Siamo sempre felici di aiutarti!",
        privacy:"Informativa sulla Privacy (Privacy Policy)",
        privacycontent:"Questa app utilizza Google AdMob per visualizzare annunci. Attraverso l'SDK di AdMob, " + 
        "questa app può raccogliere i seguenti dati: indirizzi IP, identificatori dei dispositivi (come gli ID " + 
        "pubblicitari) e dati di utilizzo (inclusi le interazioni con l'app e i registri degli errori). Le " + 
        "informazioni raccolte vengono utilizzate per migliorare i servizi, fornire annunci personalizzati e " + 
        "condurre analisi. Google può condividere questi dati degli utenti con inserzionisti di terze parti. " + 
        "Gli utenti possono disattivare la pubblicità personalizzata modificando le impostazioni sulla privacy " + 
        "sul proprio dispositivo o tramite il proprio account Google. Per ulteriori informazioni su come Google " + 
        "gestisce i dati degli utenti, si prega di fare riferimento alla Privacy Policy di Google all'indirizzo https://policies.google.com/privacy.",
        contact:"Contattaci",
        email:"Email",
        message:"Messaggio",
        send:"Invia"
    },
    no: { // Norwegian translation.
        description:"iOS-appen for å overvåke hjertehelsen ved å ta målinger av pust per minutt.",
        faq:"Ofte stilte spørsmål",
        q1:"Hvordan og når skal jeg måle pusten til katten min?",
        a1:"Ideelt sett når katten hviler eller sover. Hver gang katten puster inn eller ut, trykk bare på " + 
        "lungeikonet på Pustemonitoren. Etter 30 sekunder stopper timeren og kattens resultater vises på skjermen.",
        q2:"Hvordan beregner appen pustefrekvensen?",
        a2:"Appen teller ned fra 30 sekunder og multipliserer med 2 for å få antall åndedrag per minutt.",
        q3:"Hvorfor overvåke kattens pust?",
        a3:"Pustevansker kan være en indikator på hjertehelse og kan oppdage potensielle problemer tidlig.",
        q4:"Hva hvis kattens pustefrekvens er høy?",
        a4:"Konsulter alltid veterinæren din.",
        q5:"Samles det inn data fra appen?",
        a5:"Nei, appen samler ikke inn data. Alle data lagres på telefonen din.",
        q6:"Kan jeg bruke appen for andre kjæledyr?",
        a6:"Selv om appen er designet for katter, kan den absolutt brukes til andre kjæledyr.",
        q7:"Hva skal jeg gjøre hvis jeg har tekniske problemer?",
        a7:"Prøv å starte appen og/eller telefonen på nytt, eller kontakt oss nedenfor for hjelp. Vi hjelper alltid gjerne!",
        privacy:"Personvernerklæring",
        privacycontent:"Denne appen bruker Google AdMob for å vise annonser. Gjennom AdMob SDK kan denne appen " + 
        "samle inn følgende data: IP-adresser, enhetsidentifikatorer (som annonse-ID-er) og bruksdata (inkludert " + 
        "app-interaksjoner og krasjlogger). Den innsamlede informasjonen brukes til å forbedre tjenester, tilby " + 
        "personlige annonser og utføre analyser. Google kan dele disse brukerdataene med tredjepartsannonsører. " + 
        "Brukere kan velge bort personlig reklame ved å justere personverninnstillingene på enheten sin eller " + 
        "gjennom Google-kontoen sin. For mer informasjon om hvordan Google håndterer brukerdata, vennligst se " + 
        "Googles Personvernerklæring på https://policies.google.com/privacy.",
        contact:"Kontakt oss",
        email:"E-post",
        message:"Melding",
        send:"Send"
    },
    pl: { // Polish translation.
        description:"Aplikacja na iOS do monitorowania zdrowia serca poprzez pomiar oddechów na minutę.",
        faq:"Najczęściej zadawane pytania",
        q1:"Jak i kiedy powinienem mierzyć oddech mojego kota?",
        a1:"Najlepiej, gdy kot jest w spoczynku lub śpi. Za każdym razem, gdy kot wdycha lub wydycha, " + 
        "wystarczy dotknąć ikony płuc na Monitorze Oddechu. Po 30 sekundach stoper zatrzyma się, a wyniki twojego kota pojawią się na ekranie.",
        q2:"Jak aplikacja oblicza częstość oddechów?",
        a2:"Aplikacja odlicza 30 sekund i mnoży przez 2, aby uzyskać liczbę oddechów na minutę.",
        q3:"Dlaczego monitorować oddech mojego kota?",
        a3:"Problemy z oddychaniem mogą być wskaźnikiem zdrowia serca i mogą wcześnie wykrywać potencjalne problemy.",
        q4:"Co zrobić, jeśli częstość oddechów mojego kota jest wysoka?",
        a4:"Zawsze skonsultuj się z weterynarzem.",
        q5:"Czy aplikacja zbiera dane?",
        a5:"Nie, aplikacja nie zbiera danych. Wszystkie dane są przechowywane na twoim telefonie.",
        q6:"Czy mogę używać aplikacji dla innych zwierząt?",
        a6:"Chociaż aplikacja jest zaprojektowana dla kotów, może być również używana dla innych zwierząt.",
        q7:"Co powinienem zrobić, jeśli mam problemy techniczne?",
        a7:"Spróbuj ponownie uruchomić aplikację i/lub telefon lub skontaktuj się z nami poniżej w celu uzyskania pomocy. Zawsze chętnie pomożemy!",
        privacy:"Polityka Prywatności",
        privacycontent:"Ta aplikacja korzysta z Google AdMob do wyświetlania reklam. Za pomocą SDK AdMob ta " + 
        "aplikacja może zbierać następujące dane: adresy IP, identyfikatory urządzeń (takie jak identyfikatory " + 
        "reklamowe) oraz dane o użytkowaniu (w tym interakcje z aplikacją i dzienniki błędów). Zebrane " + 
        "informacje są wykorzystywane do poprawy usług, dostarczania spersonalizowanych reklam i " + 
        "przeprowadzania analiz. Google może udostępniać te dane użytkowników zewnętrznym reklamodawcom. " + 
        "Użytkownicy mogą zrezygnować z personalizowanej reklamy, dostosowując ustawienia prywatności " + 
        "na swoim urządzeniu lub poprzez swoje konto Google. Aby uzyskać więcej informacji na temat " + 
        "tego, jak Google obsługuje dane użytkowników, prosimy o zapoznanie się z Polityką " + 
        "Prywatności Google pod adresem https://policies.google.com/privacy.",
        contact:"Skontaktuj się z nami",
        email:"Email",
        message:"Wiadomość",
        send:"Wyślij"
    },
    pt_br: { // Portuguese (Brazil) translation.
        description:"O aplicativo iOS para monitorar a saúde do coração através da medição de respirações por minuto.",
        faq:"Perguntas Frequentes",
        q1:"Como e quando devo medir a respiração do meu gato?",
        a1:"Idealmente quando o gato está em repouso ou dormindo. Cada vez que o gato inala ou exala, basta tocar no " + 
        "ícone dos pulmões no Monitor de Respiração. Após 30 segundos, o cronômetro para e os resultados do seu gato aparecem na tela.",
        q2:"Como o aplicativo calcula a taxa de respiração?",
        a2:"O aplicativo conta regressivamente de 30 segundos e multiplica por 2 para obter o número de respirações por minuto.",
        q3:"Por que monitorar a respiração do meu gato?",
        a3:"Problemas respiratórios podem ser um indicador da saúde do coração e podem detectar problemas potenciais precocemente.",
        q4:"O que devo fazer se a taxa de respiração do meu gato estiver alta?",
        a4:"Consulte sempre seu veterinário.",
        q5:"Os dados são coletados pelo aplicativo?",
        a5:"Não, o aplicativo não coleta dados. Todos os dados são armazenados no seu telefone.",
        q6:"Posso usar o aplicativo para outros animais de estimação?",
        a6:"Embora o aplicativo seja projetado para gatos, ele pode absolutamente ser usado para outros animais de estimação.",
        q7:"O que devo fazer se tiver problemas técnicos?",
        a7:"Tente reiniciar o aplicativo e/ou seu telefone ou entre em contato conosco abaixo para assistência. Estamos sempre felizes em ajudar!",
        privacy:"Política de Privacidade",
        privacycontent:"Este aplicativo utiliza o Google AdMob para exibir anúncios. Através do SDK do AdMob, " + 
        "este aplicativo pode coletar os seguintes dados: endereços IP, identificadores de dispositivos (como " + 
        "IDs de publicidade) e dados de uso (incluindo interações com o aplicativo e registros de falhas). " + 
        "As informações coletadas são usadas para melhorar os serviços, fornecer anúncios personalizados e " + 
        "realizar análises. O Google pode compartilhar esses dados de usuários com anunciantes de terceiros. " + 
        "Os usuários podem optar por não receber publicidade personalizada ajustando as configurações de " + 
        "privacidade em seu dispositivo ou através de sua conta do Google. Para mais informações sobre como " + 
        "o Google lida com os dados dos usuários, consulte a Política de Privacidade do Google em https://policies.google.com/privacy. ",
        contact:"Entre em Contato",
        email:"Email",
        message:"Mensagem",
        send:"Enviar"
    },
    pt_pt: { // Portuguese (Portugal) translation.
      description:"A aplicação iOS para monitorizar a saúde do coração através da medição de respirações por minuto.",
      faq:"Perguntas Frequentes",
      q1:"Como e quando devo medir a respiração do meu gato?",
      a1:"Idealmente quando o gato está em repouso ou a dormir. Cada vez que o gato inala ou exala, basta tocar no " + 
      "ícone dos pulmões no Monitor de Respiração. Após 30 segundos, o cronómetro para e os resultados do seu gato aparecem no ecrã.",
      q2:"Como é que a aplicação calcula a taxa de respiração?",
      a2:"A aplicação conta regressivamente de 30 segundos e multiplica por 2 para obter o número de respirações por minuto.",
      q3:"Porque é que devo monitorizar a respiração do meu gato?",
      a3:"Problemas respiratórios podem ser um indicador da saúde cardíaca e podem detectar problemas potenciais precocemente.",
      q4:"O que devo fazer se a taxa de respiração do meu gato for alta?",
      a4:"Consulte sempre o seu veterinário.",
      q5:"Os dados são recolhidos pela aplicação?",
      a5:"Não, a aplicação não recolhe dados. Todos os dados são armazenados no seu telefone.",
      q6:"Posso usar a aplicação para outros animais de estimação?",
      a6:"Embora a aplicação tenha sido concebida para gatos, pode ser utilizada para outros animais de estimação.",
      q7:"O que devo fazer se tiver problemas técnicos?",
      a7:"Tente reiniciar a aplicação e/ou o seu telefone ou entre em contacto connosco abaixo para assistência. Estamos sempre felizes por ajudar!",
      privacy:"Política de Privacidade",
      privacycontent:"Esta aplicação utiliza o Google AdMob para exibir anúncios. Através do SDK do AdMob, esta " + 
      "aplicação pode recolher os seguintes dados: endereços IP, identificadores de dispositivos (como IDs de " + 
      "publicidade) e dados de utilização (incluindo interações com a aplicação e registos de falhas). As " + 
      "informações recolhidas são utilizadas para melhorar os serviços, fornecer anúncios personalizados e " + 
      "realizar análises. O Google pode partilhar estes dados dos utilizadores com anunciantes terceiros. " + 
      "Os utilizadores podem optar por não receber publicidade personalizada ajustando as definições de " + 
      "privacidade no seu dispositivo ou através da sua conta Google. Para mais informações sobre como o " + 
      "Google trata os dados dos utilizadores, consulte a Política de Privacidade do Google em https://policies.google.com/privacy.",
      contact:"Contacte-nos",
      email:"Email",
      message:"Mensagem",
      send:"Enviar"
    },
    ru: { // Russian translation.
        description:"Приложение для iOS для мониторинга здоровья сердца с помощью измерения дыханий в минуту.",
        faq:"Часто задаваемые вопросы",
        q1:"Как и когда мне измерять дыхание моего кота?",
        a1:"Идеально, когда кот отдыхает или спит. Каждый раз, когда кот вдыхает или выдыхает, просто нажмите " + 
        "на иконку легких на Мониторе Дыхания. Через 30 секунд таймер остановится, и результаты вашего кота появятся на экране.",
        q2:"Как приложение рассчитывает частоту дыхания?",
        a2:"Приложение отсчитывает 30 секунд и умножает на 2, чтобы получить количество вдохов в минуту.",
        q3:"Почему важно следить за дыханием моего кота?",
        a3:"Проблемы с дыханием могут быть индикатором здоровья сердца и могут рано обнаружить потенциальные проблемы.",
        q4:"Что делать, если частота дыхания моего кота высокая?",
        a4:"Всегда консультируйтесь с вашим ветеринаром.",
        q5:"Данные собираются из приложения?",
        a5:"Нет, приложение не собирает данные. Все данные хранятся на вашем телефоне.",
        q6:"Могу ли я использовать приложение для других домашних животных?",
        a6:"Хотя приложение предназначено для кошек, его можно использовать и для других домашних животных.",
        q7:"Что делать, если у меня есть технические проблемы?",
        a7:"Попробуйте перезапустить приложение и/или телефон или свяжитесь с нами ниже для получения помощи. Мы всегда рады помочь!",
        privacy:"Политика конфиденциальности",
        privacycontent:"Это приложение использует Google AdMob для показа рекламы. С помощью SDK AdMob это " + 
        "приложение может собирать следующие данные: IP-адреса, идентификаторы устройств (такие как рекламные " + 
        "идентификаторы) и данные об использовании (включая взаимодействия с приложением и журналы сбоев). " + 
        "Собранная информация используется для улучшения услуг, предоставления персонализированной рекламы и " + 
        "проведения аналитики. Google может делиться этими данными пользователей с рекламодателями третьих " + 
        "сторон. Пользователи могут отказаться от персонализированной рекламы, изменив настройки " + 
        "конфиденциальности на своем устройстве или через свою учетную запись Google. Для получения " + 
        "дополнительной информации о том, как Google обрабатывает данные пользователей, пожалуйста, " + 
        "ознакомьтесь с Политикой конфиденциальности Google по адресу https://policies.google.com/privacy.",
        contact:"Связаться с нами",
        email:"Email",
        message:"Сообщение",
        send:"Отправить"
    },
    sv: { // Swedish translation.
        description:"iOS-appen för att övervaka hjärthälsan genom att mäta andetag per minut.",
        faq:"Vanliga frågor",
        q1:"Hur och när ska jag mäta min katts andning?",
        a1:"Idealiskt när katten vilar eller sover. Varje gång katten andas in eller ut, tryck bara på lungikonen " + 
        "på Andningsmonitoren. Efter 30 sekunder stannar timern och kattens resultat visas på skärmen.",
        q2:"Hur beräknar appen andningsfrekvensen?",
        a2:"Appen räknar ner från 30 sekunder och multiplicerar med 2 för att få antalet andetag per minut.",
        q3:"Varför övervaka min katts andning?",
        a3:"Andningsproblem kan vara en indikator på hjärthälsa och kan tidigt upptäcka potentiella problem.",
        q4:"Vad ska jag göra om min katts andningsfrekvens är hög?",
        a4:"Konsultera alltid din veterinär.",
        q5:"Samlas data in från appen?",
        a5:"Nej, appen samlar inte in data. All data lagras på din telefon.",
        q6:"Kan jag använda appen för andra husdjur?",
        a6:"Även om appen är designad för katter kan den absolut användas för andra husdjur.",
        q7:"Vad ska jag göra om jag har tekniska problem?",
        a7:"Försök att starta om appen och/eller din telefon eller kontakta oss nedan för hjälp. Vi hjälper gärna till!",
        privacy:"Integritetspolicy",
        privacycontent:"Denna app använder Google AdMob för att visa annonser. Genom AdMob SDK kan denna app " + 
        "samla in följande data: IP-adresser, enhetsidentifierare (såsom annons-ID:n) och användardata (inklusive " + 
        "interaktioner med appen och krascher). Den insamlade informationen används för att förbättra tjänster, " + 
        "tillhandahålla personliga annonser och genomföra analyser. Google kan dela dessa användardata med " + 
        "tredjepartsannonsörer. Användare kan välja bort personligt anpassad annonsering genom att justera " + 
        "sekretessinställningarna på sin enhet eller via sitt Google-konto. För mer information om hur Google " + 
        "hanterar användardata, vänligen se Googles Integritetspolicy på https://policies.google.com/privacy.",
        contact:"Kontakta oss",
        email:"Email",
        message:"Meddelande",
        send:"Skicka"
    },
    th: { // Thai translation.
        description:"แอป iOS สำหรับติดตามสุขภาพหัวใจโดยการวัดการหายใจต่อนาที",
        faq:"คำถามที่พบบ่อย",
        q1:"ฉันควรจะวัดการหายใจของแมวเมื่อไหร่?",
        a1:"โดยปกติเมื่อแมวอยู่ในสภาพพักผ่อนหรือนอนหลับ ทุกครั้งที่แมวสูดหายใจเข้าและออก เพียงแค่แตะที่ไอคอนปอดบนเครื่องตรวจสอบการหายใจ หลังจาก 30 วินาที ตัวจับเวลาจะหยุดและผลลัพธ์ของแมวจะปรากฏบนหน้าจอ.",
        q2:"แอปทำการคำนวณอัตราการหายใจอย่างไร?",
        a2:"แอปจะนับถอยหลังจาก 30 วินาทีและคูณด้วย 2 เพื่อให้ได้จำนวนการหายใจต่อนาที.",
        q3:"ทำไมต้องติดตามการหายใจของแมว?",
        a3:"ปัญหาการหายใจสามารถเป็นสัญญาณบ่งชี้ถึงสุขภาพหัวใจและสามารถตรวจพบปัญหาได้ตั้งแต่เนิ่นๆ.",
        q4:"ถ้าอัตราการหายใจของแมวสูงควรทำอย่างไร?",
        a4:"ควรปรึกษาสัตว์แพทย์เสมอ.",
        q5:"แอปเก็บข้อมูลหรือไม่?",
        a5:"ไม่ แอปไม่ได้เก็บข้อมูล ข้อมูลทั้งหมดจะถูกเก็บไว้ในโทรศัพท์ของคุณ.",
        q6:"ฉันสามารถใช้แอปสำหรับสัตว์เลี้ยงตัวอื่นได้ไหม?",
        a6:"แม้ว่าแอปจะออกแบบมาสำหรับแมว แต่ก็สามารถใช้ได้กับสัตว์เลี้ยงตัวอื่น.",
        q7:"ถ้าฉันมีปัญหาทางเทคนิคควรทำอย่างไร?",
        a7:"ลองรีสตาร์ทแอปและ/หรือโทรศัพท์ของคุณ หรือ ติดต่อเราด้านล่างเพื่อขอความช่วยเหลือ เรายินดีที่จะช่วยเสมอ!",
        privacy:"นโยบายความเป็นส่วนตัว",
        privacycontent:"แอปนี้ใช้ Google AdMob เพื่อแสดงโฆษณา ผ่าน AdMob SDK แอปนี้อาจเก็บข้อมูลต่อไปนี้: " + 
        "ที่อยู่ IP, รหัสประจำตัวอุปกรณ์ (เช่น รหัสโฆษณา) และข้อมูลการใช้งาน (รวมถึงการโต้ตอบกับแอปและบันทึกข้อผิดพลาด) " + 
        "ข้อมูลที่เก็บรวบรวมจะถูกใช้เพื่อปรับปรุงบริการ, ให้โฆษณาที่ปรับแต่งตามความต้องการ และทำการวิเคราะห์ Google " + 
        "อาจแบ่งปันข้อมูลผู้ใช้เหล่านี้กับผู้โฆษณาฝ่ายที่สาม ผู้ใช้สามารถเลือกไม่รับโฆษณาที่ปรับแต่งได้โดยการปรับเปลี่ยนการตั้งค่าความเป็นส่วนตัวในอุปกรณ์ของตนหรือผ่านบัญชี " + 
        "Google ของตน สำหรับข้อมูลเพิ่มเติมเกี่ยวกับวิธีที่ Google จัดการข้อมูลผู้ใช้ โปรดดูที่ นโยบายความเป็นส่วนตัว ของ " + 
        "Google ที่ https://policies.google.com/privacy.",
        contact:"ติดต่อเรา",
        email:"Email",
        message:"ข้อความ",
        send:"ส่ง"
    },
    tr: { // Turkish translation.
        description:"Kalp sağlığını izlemek için iOS uygulaması, dakikada nefes sayımı yaparak.",
        faq:"Sıkça Sorulan Sorular",
        q1:"Kedimin nefesini ne zaman ve nasıl ölçmeliyim?",
        a1:"İdeali, kedi dinlenirken veya uyurken. Kedi her nefes aldığında veya verdiğinde, sadece Nefes " + 
        "Monitörü üzerindeki akciğer simgesine dokunun. 30 saniye sonra zamanlayıcı duracak ve kedinizin sonuçları ekranda görünecektir.",
        q2:"Uygulama nefes alma oranını nasıl hesaplıyor?",
        a2:"Uygulama 30 saniye geri sayım yapar ve dakikada alınan nefes sayısını elde etmek için 2 ile çarpar.",
        q3:"Kedimin nefesini neden izlemeliyim?",
        a3:"Nefes alma sorunları kalp sağlığının bir göstergesi olabilir ve potansiyel sorunları erken tespit edebilir.",
        q4:"Kedimin nefes alma oranı yüksekse ne yapmalıyım?",
        a4:"Her zaman veterinerinize danışın.",
        q5:"Uygulama veri topluyor mu?",
        a5:"Hayır, uygulama veri toplamaz. Tüm veriler telefonunuzda saklanır.",
        q6:"Uygulamayı diğer evcil hayvanlar için kullanabilir miyim?",
        a6:"Uygulama kediler için tasarlanmış olsa da, diğer evcil hayvanlar için de kullanılabilir.",
        q7:"Teknik sorunlarım varsa ne yapmalıyım?",
        a7:"Uygulamayı ve/veya telefonunuzu yeniden başlatmayı deneyin veya yardım için aşağıdan bizimle iletişime geçin. Her zaman yardımcı olmaktan mutluluk duyarız!",
        privacy: "Gizlilik Politikası",
        privacycontent: "Bu uygulama, reklam sunmak için Google AdMob'u kullanmaktadır. AdMob SDK aracılığıyla " + 
        "bu uygulama aşağıdaki verileri toplayabilir: IP adresleri, cihaz tanımlayıcıları (reklam kimlikleri " + 
        "gibi) ve kullanım verileri (uygulama etkileşimleri ve çökme günlükleri dahil). Toplanan bilgiler, " + 
        "hizmetleri geliştirmek, kişiselleştirilmiş reklamlar sunmak ve analiz yapmak için kullanılmaktadır. " + 
        "Google, bu kullanıcı verilerini üçüncü taraf reklamverenlerle paylaşabilir. Kullanıcılar, " + 
        "cihazlarındaki gizlilik ayarlarını değiştirerek veya Google hesapları aracılığıyla " + 
        "kişiselleştirilmiş reklamlardan çıkabilirler. Google'ın kullanıcı verilerini nasıl " + 
        "işlediği hakkında daha fazla bilgi için lütfen Google'ın Gizlilik Politikasına bakın: https://policies.google.com/privacy.",
        contact:"Bizimle İletişime Geçin",
        email:"Email",
        message:"Mesaj",
        send:"Gönder"
    },
    ja: { // Japanese translation.
        description:"心臓の健康を監視するためのiOSアプリで、1分あたりの呼吸数を測定します。",
        faq:"よくある質問",
        q1:"猫の呼吸をいつ、どのように測定すべきですか？",
        a1:"理想的には、猫が休んでいるときや寝ているときです。猫が吸ったり吐いたりするたびに、呼吸モニターの肺のアイコンをタップしてください。30秒後にタイマーが停止し、猫の結果が画面に表示されます。",
        q2:"アプリは呼吸率をどのように計算しますか？",
        a2:"アプリは30秒からカウントダウンし、1分あたりの呼吸数を得るために2倍します。",
        q3:"なぜ猫の呼吸を監視する必要がありますか？",
        a3:"呼吸の問題は心臓の健康の指標となる可能性があり、潜在的な問題を早期に発見できます。",
        q4:"もし猫の呼吸率が高い場合はどうすればいいですか？",
        a4:"必ず獣医に相談してください。",
        q5:"アプリはデータを収集しますか？",
        a5:"いいえ、アプリはデータを収集しません。すべてのデータはあなたの電話に保存されます。",
        q6:"他のペットにもアプリを使用できますか？",
        a6:"アプリは猫用に設計されていますが、他のペットにも使用できます。",
        q7:"技術的な問題がある場合はどうすればいいですか？",
        a7:"アプリや電話を再起動してみるか、下記からお問い合わせください。お手伝いできることを嬉しく思います！",
        privacy:"プライバシーポリシー",
        privacycontent:"このアプリは、広告を表示するためにGoogle AdMobを使用しています。AdMob SDKを通じて、このアプリは次のデータを収集することがあります：IPアドレス、" + 
        "デバイス識別子（広告IDなど）、および使用データ（アプリとのインタラクションやクラッシュログを含む）。収集された情報は、サービスの改善、パーソナライズされた広告の提供、" + 
        "および分析の実施に使用されます。Googleは、これらのユーザーデータを第三者の広告主と共有する場合があります。ユーザーは、デバイスのプライバシー設定を調整するか、" + 
        "Googleアカウントを通じてパーソナライズされた広告をオプトアウトできます。Googleがユーザーデータをどのように扱うかについての詳細は、" + 
        "Googleのプライバシーポリシーをご覧ください：https://policies.google.com/privacy。",
        contact:"お問い合わせ",
        email:"メール",
        message:"メッセージ",
        send:"送信"
    },
    ko: { // Korean translation.
       description:"심장 건강을 모니터링하기 위한 iOS 앱으로, 분당 호흡 수치를 측정합니다.", 
       faq:"자주 묻는 질문", 
       q1:"내 고양이의 호흡을 언제 어떻게 측정해야 하나요?", 
       a1:"이상적으로는 고양이가 휴식을 취하거나 자고 있을 때입니다. 고양이가 숨을 들이쉬거나 내쉴 때마다 호흡 모니터의 폐 아이콘을 터치하세요. 30초 후에 타이머가 멈추고 고양이의 결과가 화면에 나타납니다.", 
       q2:"앱은 호흡률을 어떻게 계산하나요?", 
       a2:"앱은 30초에서 카운트다운하고 1분당 호흡 수를 얻기 위해 2배로 곱합니다.", 
       q3:"왜 내 고양이의 호흡을 모니터링해야 하나요?", 
       a3:"호흡 문제는 심장 건강의 지표가 될 수 있으며 잠재적인 문제를 조기에 발견할 수 있습니다.", 
       q4:"내 고양이의 호흡률이 높으면 어떻게 해야 하나요?", 
       a4:"항상 수의사와 상담하세요.", 
       q5:"앱에서 데이터가 수집되나요?", 
       a5:"아니요, 앱은 데이터를 수집하지 않습니다. 모든 데이터는 귀하의 전화기에 저장됩니다.", 
       q6:"다른 애완동물에도 앱을 사용할 수 있나요?", 
       a6:"앱은 고양이를 위해 설계되었지만 다른 애완동물에도 사용할 수 있습니다.", 
       q7:"기술적인 문제가 발생하면 어떻게 해야 하나요?", 
       a7:"앱과/또는 전화를 재시작해 보거나 아래에서 저희에게 연락하여 도움을 요청하세요. 항상 도와드릴 준비가 되어 있습니다!", 
       privacy:"개인정보처리방침",
       privacycontent:"이 앱은 광고를 제공하기 위해 Google AdMob을 사용합니다. AdMob SDK를 통해 이 앱은 다음 데이터를 수집할 수 있습니다: " + 
       "IP 주소, 장치 식별자(광고 ID와 같은) 및 사용 데이터(앱 상호작용 및 오류 로그 포함). 수집된 정보는 서비스 개선, 개인화된 광고 제공 및 분석 수행에 " + 
       "사용됩니다. Google은 이러한 사용자 데이터를 제3자 광고주와 공유할 수 있습니다. 사용자는 자신의 장치에서 개인 정보 보호 설정을 조정하거나 Google " + 
       "계정을 통해 개인화된 광고를 선택 해제할 수 있습니다. Google이 사용자 데이터를 처리하는 방법에 대한 자세한 내용은 Google의 개인정보처리방침을 " + 
       "참조하십시오: https://policies.google.com/privacy.",
       contact:"문의하기", 
       email:"이메일", 
       message:"메시지", 
       send:"보내기" 
    },
    zh: { // Chinese (Simplified) translation.
        description:"用于监测心脏健康的iOS应用，通过每分钟呼吸次数的测量。",
        faq:"常见问题",
        q1:"我应该什么时候以及如何测量我的猫的呼吸？",
        a1:"理想情况下，当猫处于休息或睡眠状态时。每次猫吸气或呼气时，只需点击呼吸监测器上的肺部图标。30秒后，计时器将停止，您的猫的结果将显示在屏幕上。",
        q2:"应用程序如何计算呼吸率？",
        a2:"应用程序从30秒倒计时，并乘以2以获得每分钟的呼吸次数。",
        q3:"为什么要监测我猫的呼吸？",
        a3:"呼吸问题可能是心脏健康的指标，并可能及早发现潜在问题。",
        q4:"如果我猫的呼吸率很高，我该怎么办？",
        a4:"请始终咨询您的兽医。",
        q5:"应用程序会收集数据吗？",
        a5:"不，应用程序不收集数据。所有数据都存储在您的手机上。",
        q6:"我可以将应用程序用于其他宠物吗？",
        a6:"虽然该应用程序是为猫设计的，但绝对可以用于其他宠物。",
        q7:"如果我遇到技术问题该怎么办？",
        a7:"尝试重新启动应用程序和/或您的手机，或在下面与我们联系以获取帮助。我们总是乐意提供帮助！",
        privacy:"隐私政策",
        privacycontent:"此应用程序使用 Google AdMob 来展示广告。通过 AdMob SDK，此应用程序可能会收集以下数据：IP 地址、设备标识符（如广告 ID）" + 
        "和使用数据（包括应用交互和崩溃日志）。收集的信息用于改善服务、提供个性化广告以及进行分析。Google 可能会与第三方广告商共享这些用户数据。" + 
        "用户可以通过调整设备上的隐私设置或通过 Google 帐户选择退出个性化广告。有关 Google 如何处理用户数据的更多信息，请参阅 Google 的 隐私政策，" + 
        "网址为 https://policies.google.com/privacy。",
        contact:"联系我们",
        email:"电子邮件",
        message:"消息",
        send:"发送"
    }
};

export { translations };
