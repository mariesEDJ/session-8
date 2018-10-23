var app = new Vue({
  el: '#app',
  data: {
    firstName: "Marie",
    lastName: "Sasin",
    description: "Journaliste en formation à Sciences Po, parcours Data et écritures et apprentie à RTL.fr",
    photo: "https://pbs.twimg.com/profile_images/924945309658206208/ufFgjCQL_400x400.jpg",
    twitter: "mariesasin",
    github: "mariesEDJ",
    mail: "marie.sasin@sciencespo.fr",
    experiences: [{
      dateBegin: "Juin 2018",
      dateEnd: "Today",
      name: "RTL.fr",
      title: "Journaliste apprentie",
      description: "Rédaction d'articles sur l'actualité, reprise d'antenne"
    }, {
      dateBegin: "Été 2017",
      dateEnd: false,
      name: "Ouest France",
      title: "Journaliste stagiaire à la rédaction locale de Caen (Calvados)",
      description: "Rédaction d'articles sur l'actualité locale print et web"
    }, {
      dateBegin: "Été 2016",
      dateEnd: false,
      name: "L'Union-L'Ardennais",
      title: "Journaliste stagiaire à la rédaction locale de Châlons-en-Champagne (Marne)",
      description: "Rédaction d'articles sur l'actualité locale print et web, faits divers, tribunal correctionnel"
    }],
    formations: [{
      dateBegin: "2017",
      dateEnd: "2019",
      name: "Master Journalisme",
      university: "Ecole de journalisme de Sciences Po"
    },{
      dateBegin: "2017",
      dateEnd: "2016",
      name: "Maîtrise d'Information-Communication",
      university: "Institut français de presse (Paris II) - Panthéon-Assas"
    }, {
      dateBegin: "2016",
      dateEnd: "2015",
      name: "Bi-licence Histoire/Information-communication",
      university: "Institut français de presse (Paris II) et Sorbonne (Paris IV)"
    },{
      dateBegin: "2013",
      dateEnd: "2014",
      name: "Hypokhâgne - Khâgne B/L",
      university: "Lycée Jean Jaurès - Reims (Marne)"
    }],
    languages: ["Anglais", "Espagnol", "Russe"],
    skills: ["Suite Office", "Eidos", "Revo", "Netia", "Cutscene"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})
