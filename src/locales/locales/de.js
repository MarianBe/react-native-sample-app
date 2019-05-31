export default {
  user: {
    password: 'Passwort',
    confirmPassword: 'Passwort bestätigen'
  },
  buttons: {
    login: 'Einloggen',
    register: 'Jetzt Registrieren',
    logout: 'Abmelden',
    cancel: 'Abbrechen',
    forgotPassword: 'Passwort vergessen?',
    resetPassword: 'Passwort zurücksetzen',
    facebook: {
      register: 'Mit Facebook registrieren',
      login: 'Mit Facebook anmelden'
    },
    google: {
      register: 'Mit Google registrieren',
      login: 'Mit Google anmelden'
    }
  },
  toasts: {
    error: 'Fehler',
    success: 'Erfolgreich'
  },
  messages: {
    or: 'oder',
    dataSaved: 'Änderungen gespeichert',
    logout: 'Bist Du sicher, dass Du dich abmelden möchtest?',
    confirmAppClose: 'Drücke nochmal, um Die App zu beenden',
    enterValidEmail: 'Bitte gültige E-Mail eintragen',
    enterFirstName: 'Bitte Vornamen eintragen',
    enterLastName: 'Bitte Nachnamen eintragen',
    enterMinChars: 'Min. 8 Zeichen eintragen',
    passwordsNotCorrect: 'Passwörter stimmen nicht überein',
    enterBirthday: 'Bitte gültiges Geburtsdatum eintragen',
    enterPassword: 'Bitte Passwort eintragen',
    forgotPasswordSend: 'Wir haben Dir eine Mail gesendet',
    forgotPasswordEmailNotFound: 'E-Mail nicht gefunden',
    acceptDisclaimer: 'Du musst die Nutzungsbedingungen akzeptieren',
    error: 'Es ist ein Fehler aufgetreten',
    errors: {
      general:
        'Es ist ein unerwarteter Fehler aufgetreten. Bitte prüfe Deine Internetverbindung',
      requiredDataMissing: 'Notwendige Daten fehlen',
      expired: 'Abgelaufen',
      denied: 'Zugriff verweigert',
      failed: 'Fehlgeschlagen',
      alreadyExists: 'Daten sind bereits vorhanden',
      notFound: 'Daten nicht gefunden',
      passwordIncorrect: 'Falsches Passwort',
      url: 'Url kann nicht geöffnet werden',
      noInternet: 'Keine Internetverbindung',
      loginFailed: 'Email und/oder Passwort nicht korrekt',
      forbidden:
        'Nicht zulässig. Bitte überprüfe Deine Eingabe auf ihre Richtigkeit.'
    },
    buy: {
      message: 'Kauf erfolgreich abgeschlossen.',
      error: 'Derzeit keine Verbindung möglich. Versuche es später erneut.'
    }
  },
  videoplayer: {
    playrate: 'Geschwindigkeit',
    subtitle: 'Untertitel',
    audiotrack: 'Tonspur',
    default: 'Standard',
    none: 'Keine',
    upnext: 'Als nächstes'
  },
  // ab hier custom stuff, darüber ist TODO CHECK
  intro: {
    slides: {
      slide1: {
        title: 'Heiner Lauterbach',
        msg: 'Lehrt Schauspiel'
      },
      slide2: {
        title: 'Til Schweiger',
        msg: 'Lehrt Film'
      },
      slide3: {
        title: 'Jonas Kaufmann',
        msg: 'Lehrt Gesang'
      },
      slide4: {
        title: 'Alfons Schuhbeck',
        msg: 'Lehrt Kochen'
      }
    }
  },
  loader: {
    pleaseWait: 'Bitte warten\nwir laden die Besten der Besten'
  },
  header: {
    search: 'Suche'
  },
  general: {
    isTeaching: 'Lehrt {{subject}}',
    chapter: 'Kapitel {{number}}',
    min: 'Min',
    firstname: 'Vorname',
    lastname: 'Nachname',
    salutation: 'Anrede',
    mail: 'E-Mail',
    save: 'Speichern',
    delimiter: ',',
    pleaseEnter: 'Bitte eingeben',
    currency: '€',
    address: {
      street: 'Straße',
      street_number: 'Hausnummer',
      zipcode: 'PLZ',
      city: 'Stadt',
      phone: 'Telefonnummer',
      country: 'Land'
    },
    countries: {
      af: 'Afghanistan',
      eg: 'Ägypten',
      al: 'Albanien',
      ad: 'Andorra',
      ar: 'Argentinien',
      au: 'Australien',
      bh: 'Bahrain',
      be: 'Belgien',
      ba: 'Bosnien und Herzegowina',
      br: 'Brasilien',
      bg: 'Bulgarien',
      cl: 'Chile',
      cn: 'China',
      cr: 'Costa Rica',
      dk: 'Dänemark',
      de: 'Deutschland',
      ec: 'Ecuador',
      ee: 'Estland',
      fo: 'Färöer',
      fi: 'Finnland',
      fr: 'Frankreich',
      gr: 'Griechenland',
      in: 'Indien',
      id: 'Indonesien',
      iq: 'Irak',
      ir: 'Iran',
      ie: 'Irland',
      is: 'Island',
      il: 'Israel',
      it: 'Italien',
      jm: 'Jamaika',
      jp: 'Japan',
      ca: 'Kanada',
      qa: 'Katar',
      co: 'Kolumbien',
      hr: 'Kroatien',
      cu: 'Kuba',
      lv: 'Lettland',
      li: 'Liechtenstein',
      lt: 'Litauen',
      lu: 'Luxemburg',
      mt: 'Malta',
      mk: 'Mazedonien',
      mx: 'Mexiko',
      ma: 'Marokko',
      md: 'Moldawien',
      mc: 'Monaco',
      me: 'Montenegro',
      nz: 'Neuseeland',
      nl: 'Niederlande',
      no: 'Norwegen',
      at: 'Österreich',
      py: 'Paraguay',
      pe: 'Peru',
      ph: 'Philippinen',
      pl: 'Polen',
      pt: 'Portugal',
      ro: 'Rumänien',
      ru: 'Russland',
      sm: 'San Marino',
      sa: 'Saudi-Arabien',
      se: 'Schweden',
      ch: 'Schweiz',
      rs: 'Serbien',
      sg: 'Singapur',
      sk: 'Slowakei',
      si: 'Slowenien',
      es: 'Spanien',
      za: 'Südafrika',
      kr: 'Südkorea',
      tw: 'Taiwan',
      th: 'Thailand',
      cz: 'Tschechien',
      tn: 'Tunesien',
      tr: 'Türkei',
      ua: 'Ukraine',
      hu: 'Ungarn',
      uy: 'Uruguay',
      ve: 'Venezuela',
      ae: 'Vereinigte Arabische Emirate',
      us: 'Vereinigte Staaten',
      gb: 'Vereinigtes Königreich',
      vn: 'Vietnam',
      by: 'Weißrussland',
      cy: 'Zypern'
    }
  },
  home: {
    moreComing: 'More Coming Soon...',
    resumeNow: 'Jetzt fortsetzen',
    soonOn: 'Demnächst bei Meet Your Master',
    comingSoon: 'Coming soon'
  },
  discover: {
    searchRecommendations: 'Suchvorschläge',
    searchPlaceholder: 'Sucheingabe',
    noSearchMatches: 'Keine Übereinstimmungen für Deine Suche.',
    checkSpelling:
      'Bitte überprüfe Deine Rechtschreibung und versuche es erneut.'
  },
  details: {
    watchTrailer: 'Trailer anschauen',
    overview: 'Übersicht',
    lessons: 'Unterrichtsstunden',
    whatsAwaitingYou: 'Diese Lesson enthält',
    toChapter1: 'Zum Kapitel 1',
    resumeChapter: 'Kapitel {{chapter}} fortsetzen',
    startChapter: 'Kapitel {{chapter}} starten',
    couldBeInteresting: 'Das könnte Dich auch interessieren.',
    downloadWorkbook: 'Download Workbook'
  },
  'detail-icons': {
    chapter: 'Videos',
    pages: 'Seiten Workbook',
    minutes: 'Minuten'
  },
  register: {
    title: 'Lerne von den Besten der Besten',
    subTitle: 'Mit Meet Your Master lernst du\nDein Potenzial auszuschöpfen!',
    disclaimer: {
      1: 'Indem Du ein Konto erstellst, erklärst Du dich mit den',
      2: ', der',
      3: 'und der',
      4: 'von Meet Your Master einverstanden.',
      agb: 'Nutzungsbedingungen',
      privacyPolicy: 'Datenschutzrichtlinie',
      cancellationTerms: 'Widerrufsbelehrung',
      newsletter:
        'Registriere Dich für E-Mail, um die aktuellen Neuigkeiten von Meet Your Master zu erhalten.'
    },
    alreadyAnAccount: 'Du bist bereits angemeldet?',
    goToLogin: 'Zum Login',
    birthday: 'Geburtsdatum eingeben',
    acceptAGBFirst: 'Bitte akzeptiere zuerst unsere Nutzungsbedingungen'
  },
  login: {
    title: 'Lerne von den Besten der Besten',
    subTitle: 'Mit Meet Your Master lernst du\nDein Potenzial auszuschöpfen!',
    disclaimer: {
      1: 'Indem Du dich einloggst, erklärst Du dich mit den',
      2: ', der',
      3: 'und der',
      4: 'von Meet Your Master einverstanden.',
      agb: 'Nutzungsbedingungen',
      privacyPolicy: 'Datenschutzrichtlinie',
      cancellationTerms: 'Widerrufsbelehrung'
    },
    noAccount: 'Noch kein Mitglied?',
    goToRegister: 'Jetzt Registrieren'
  },
  profile: {
    profile: 'Profil',
    premiumMember: 'Premium Member',
    allAccess: 'All Access',
    singleAccess: 'Single Access',
    memberSince: 'Registriert seit {{date}}',
    memberWillEnd: 'Mitgliedschaft endet in {{days}} Tagen',
    yourMasters: 'Deine Master',
    yourAccount: 'Dein Konto',
    yourHistory: 'Dein Verlauf',
    history: 'Verlauf',
    notifications: 'Benachrichtigungen',
    settings: 'Einstellungen',
    help: 'Hilfe',
    helpScreen: {
      title: 'Hilfe & Support',
      faq: 'FAQ',
      agb: 'Geschäftsbedingungen',
      privacyPolicy: 'Datenschutzerklärung',
      revocation: 'Widerrufsbelehrung',
      feedback: 'App bewerten',
      contactUs: 'Kontakt'
    },
    settingsScreen: {
      title: 'Einstellungen',
      version: 'App-Version: {{version}}({{buildNumber}})'
    },
    notificationSettingsScreen: {
      title: 'Benachrichtugnen',
      pushNewMasters: 'Neue Master online',
      pushOffers: 'Neue Angebote',
      newsletter: 'Newsletter'
    },
    myMastersScreen: {
      noCoursesUnlocked: 'Du hast noch keine Kurse freigeschaltet.',
      discoverCourse: 'Jetzt Kurse entdecken',
      title: 'Deine gekauften Master'
    },
    account: {
      changeName: 'Name ändern',
      changeMail: 'E-Mail ändern',
      changeAddress: 'Adresse ändern',
      changePassword: 'Passwort ändern',
      logout: 'Ausloggen',
      name: 'Name',
      address: 'Adresse',
      mail: 'E-Mail',
      password: 'Passwort',
      oldPassword: 'Aktuelles Passwort eingeben',
      newPassword: 'Neues Passwort eingeben',
      confirmNewPassword: 'Neues Passwort bestätigen',
      salutation: {
        mrs: 'Frau',
        mr: 'Herr',
        null: 'Keine Angabe'
      }
    }
  },
  history: {
    noVideosWatched: 'Du hast noch keine Videos angesehen'
  },
  forgotPassword: {
    title: 'Lerne von den Besten der Besten',
    subTitle: 'Mit Meet Your Master lernst du\nDein Potenzial auszuschöpfen!'
  },
  buyButton: {
    buyNow: 'Bitte Besuche unsere Website', // 'Jetzt für {{amount}}{{currency}} kaufen',
    signUp: 'Dieser Kurs ist nicht Freigeschaltet'
  },
  noInternet: {
    text:
      'Wir konnten keine Verbindung herstellen. Bitte überprüfe Deine Internetverbindung und versuche es dann noch einmal.',
    stillNoConnection:
      'Wir konnten uns leider immer noch nicht mit dem Internet verbinden. Bitte versuche es später noch einmal',
    retry: 'Erneut versuchen'
  },
  updateNow: {
    text:
      'Deine App-Version ist veraltet. Bitte geh in den Store und installiere die neueste Version '
  },
  codepush: {
    title: 'Update verfügbar',
    message: 'Ein Update ist erforderlich',
    button: 'Jetzt updaten'
  }
}
