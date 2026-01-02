 function showFact() {
        const facts = [
            "Харків був першою столицею радянської України.",
            "Площа Свободи — одна з найбільших у Європі.",
            "У Харкові понад 40 вищих навчальних закладів.",
            "Місто називають студентською столицею України."
        ];
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById("fact").textContent = randomFact;
    }