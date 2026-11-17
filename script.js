// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    name: "Moss Dragon",
    description: "A gentle gardener who grows tiny forests wherever it naps.",
    image: "assets/moss-dragon.svg",
    alt: "A green dragon with leafy horns and small wings.",
  },
  {
    name: "Cloud Fox",
    description: "A sky wanderer collecting soft clouds and lost daydreams.",
    image: "assets/cloud-fox.svg",
    alt: "A pale blue fox with pointed ears and a fluffy tail.",
  },
  {
    name: "Ember Salamander",
    description: "A warm little companion that keeps campfires glowing.",
    image: "assets/ember-salamander.svg",
    alt: "An orange salamander with a flame at the end of its tail.",
  },
  {
    name: "Moon Owl",
    description: "A quiet navigator who reads the stories written in stars.",
    image: "assets/moon-owl.svg",
    alt: "A purple owl with a crescent moon on its forehead.",
  },
  {
    name: "Crystal Turtle",
    description: "A patient explorer carrying a sparkling crystal garden.",
    image: "assets/crystal-turtle.svg",
    alt: "A mint green turtle with purple crystals on its shell.",
  },
  {
    name: "Mushroom Sprite",
    description: "A woodland storyteller with a spotted cap and muddy boots.",
    image: "assets/mushroom-sprite.svg",
    alt: "A small cream sprite wearing a red spotted mushroom cap.",
  },
];

// YOUR WORK: build these features using the supplied HTML, CSS, and data.

// 1. Select the collection, controls, and status message.
const collection = document.querySelector("#collection");
const themeSelect = document.querySelector("#theme");
const layoutSelect = document.querySelector("#layout");
const statusMessage = document.querySelector("#status");

// Use a unique key for this assignment.
const storageKey = "mtm6302-a4-creature-collection-earl0048";

// 2. Loop through the supplied creatures and create HTML entries.
function displayCreatures() {
  for (const creature of $creatures) {
    const listItem = document.createElement("li");
    listItem.className = "creature";

    const image = document.createElement("img");
    image.src = creature.image;
    image.alt = creature.alt;

    const info = document.createElement("div");
    info.className = "creature-info";

    const name = document.createElement("h3");
    name.textContent = creature.name;

    const description = document.createElement("p");
    description.className = "creature-description";
    description.textContent = creature.description;

    info.append(name, description);
    listItem.append(image, info);
    collection.appendChild(listItem);
  }
}

// 3. Apply the selected theme and layout to the page.
function applyPreferences() {
  document.body.dataset.theme = themeSelect.value;
  collection.dataset.layout = layoutSelect.value;
}

// 4. Save both preferences together in Local Storage.
function savePreferences() {
  const preferences = {
    theme: themeSelect.value,
    layout: layoutSelect.value,
  };

  localStorage.setItem(storageKey, JSON.stringify(preferences));

  applyPreferences();

  statusMessage.textContent = "Your preferences have been saved!";
}

// 5. Restore saved preferences when the page loads.
function restorePreferences() {
  const savedData = localStorage.getItem(storageKey);

  if (savedData) {
    const preferences = JSON.parse(savedData);

    themeSelect.value = preferences.theme;
    layoutSelect.value = preferences.layout;

    applyPreferences();

    statusMessage.textContent = "Your saved preferences have been restored!";
  } else {
    // Keep the supplied Forest and Cards defaults.
    applyPreferences();

    statusMessage.textContent =
      "Welcome! Choose a habitat and layout to personalize your collection.";
  }
}

// 6. Listen for changes to either preference control.
themeSelect.addEventListener("change", savePreferences);
layoutSelect.addEventListener("change", savePreferences);

// 7. Generate the collection and restore saved settings.
displayCreatures();
restorePreferences();
