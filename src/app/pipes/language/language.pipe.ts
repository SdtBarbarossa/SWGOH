import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {
  
  transform(value: string): string {

    var userLang = navigator.language;
    
    if (userLang == "de-DE") {
      if (this.languageDE[value] != null)
        return this.languageDE[value];
      else
        return value;
    }
    else {
      if (this.languageENG[value] != null)
        return this.languageENG[value];
      else
        return value;
    }
  }

  public languageDE: { [id: string]: string; } = {
    "Settings": "Einstellungen",
    "Home": "Startseite",
    "Charsearch": "Charaktersuche",
    "Squadsearch": "Teamsuche",
    "TB-Platoon": "TB-Platoon",
    "Raid-Planner": "Raidplaner",
    "ArenaTeams": "Arenateams",
    "WelcomeText": "Willkommen auf Swgoh-Helper!",
    "AllDataText": "Alle Daten von",
    "AllPictureText": "und alle Bilder von",
    "GuildName": "Gildenname",
    "GildenGP": "Gilden GP",
    "GildenDescription": "Gildenbeschreibung",
    "RaidsPlayed": "Gespielte Raids",
    "LastSync": "Letzte Synchronisation",
    "EnterAllyCode": "Bitte gehen Sie in die Einstellungen und geben sie Ihren Verbündetencode an!",
    "PleaseSync": "Bitte synchronisieren Sie sich indem sie den Knopf unten drücken!",
    "Synchronise": "Synchronisieren",
    "Allycode": "Verbündetencode",
    "AllycodeEG": "dein Verbündetencode ( z.B. 456789123 )",
    "SortMemberby": "Mitglieder sortieren nach",
    "UseAutocomplete": "Autovervollständigung",
    "ShowErrors": "Zeige Fehler",
    "SaveSettings": "Einstellungen speichern",
    "WithRank": "mit Rang",
    "Speed": "Tempo",
    "Potency": "Effektivität",
    "Health": "Gesundheit",
    "Offense %": "Angriff %",
    "Critical Chance": "Kirt. Trefferchance",
    "Health %": "Gesundheit %",
    "Defense %": "Abwehr %",
    "Protection %": "Schutz %",
    "Critical Damage": "Krit. Schaden",
    "Offense": "Angriff",
    "Protection": "Schutz",
    "Tenacity": "Zähigkeit",
    "Defense": "Abwehr",
    "Critical Avoidance": "Krit. Ausweichen",
    "Accuracy": "Genauigkeit",
    "Show/Hide": "Ein-/Ausblenden",
    "CharNamePlaceHolder": "Charaktername ( z.B. 'Boba Fett' oder 'Boba'  )",
    "of": "von",
    "Charname": "Charaktername",
    "Needed": "Benötigt",
    "Available": "Verfügbar",
    "Difference": "Differenz",
    "Stars Needed": "Erforderliche Sterne",
    "Del": "Löschen",
    "Add": "Hinzufügen",
    "Confirm": "Bestätigen",
    "AddSquad": "Ein Team Hinzufügen",
  };

  public languageENG: { [id: string]: string; } = {
    "Settings": "Settings",
    "Home": "Home",
    "Charsearch": "Charsearch",
    "Squadsearch": "Squadsearch",
    "TB-Platoon": "TB-Platoon",
    "Raid-Planner": "Raid-Planner",
    "ArenaTeams": "Arena Teams",
    "WelcomeText": "Welcome to Swgoh-Helper!",
    "AllDataText": "All Datas are from",
    "AllPictureText": "and all Pictures from",
    "GuildName": "Guildname",
    "GildenGP": "Guild GP",
    "GildenDescription": "Gilden Description",
    "RaidsPlayed": "Raids Played",
    "LastSync": "Last Sync",
    "EnterAllyCode": "Please go to Settings and enter your Allycode!",
    "PleaseSync": "Please Synchronise with swgoh.help by hitting the button at the bottom!",
    "Synchronise": "Synchronisieren",
    "Allycode": "Allycode",
    "AllycodeEG": "your allycode ( e.g 456789123 )",
    "SortMemberby": "Sort Member by",
    "UseAutocomplete": "Use Autocomplete",
    "ShowErrors": "Show Errors",
    "SaveSettings": "Save Settings",
    "WithRank": "with rank",
    "Speed": "Speed",
    "Potency": "Potency",
    "Health": "Health",
    "Offense %": "Offense %",
    "Critical Chance": "Critical Chance",
    "Health %": "Health %",
    "Defense %": "Defense %",
    "Protection %": "Protection %",
    "Critical Damage": "Critical Damage",
    "Offense": "Offense",
    "Protection": "Protection",
    "Tenacity": "Tenacity",
    "Defense": "Defense",
    "Critical Avoidance": "Critical Avoidance",
    "Accuracy": "Accuracy",
    "Show/Hide": "Show/Hide",
    "CharNamePlaceHolder": "Charname ( e.g 'Boba Fett' or 'Boba'  )",
    "of": "of",
    "Charname": "Charname",
    "Needed": "Needed",
    "Available": "Available",
    "Difference": "Difference",
    "Stars Needed": "Stars Needed",
    "Del": "Del",
    "Add": "Add",
    "Confirm": "Confirm",
    "AddSquad": "Add a Squad",

  };

}