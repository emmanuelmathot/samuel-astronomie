
export const presentationContent = `
---
theme: default
background: https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920
class: text-center
highlighter: false
lineNumbers: false
info: |
  ## L'Astronomie et ses Instruments d'Observation
  Présentation par Samuel
drawings:
  persist: false
transition: slide-left
title: L'Astronomie et ses Instruments d'Observation
---

# L'Astronomie et ses Instruments d'Observation

## Voyage à travers les télescopes et observatoires

---
layout: two-cols
---

# Les Télescopes et Lunettes Astronomiques

## Comment ça marche ?

- **Lunette astronomique** : utilise des lentilles
- **Télescope** : utilise des miroirs
- Collecte la lumière des étoiles et des objets célestes
- Grossit les objets lointains de l'univers

---
layout: image
image: /saturne.jpeg
backgroundSize: contain
---

<div class="absolute bottom-10 left-0 right-0 text-center">
  <h2 class="text-xl font-bold bg-black bg-opacity-70 inline-block px-8 py-4 rounded-lg">
    Saturne vue au télescope dans le jardin
  </h2>
</div>

---
layout: image-right
image: /galilée-lunette-astronomique.jpg
---

# L'Histoire du Télescope

## 🌟 Les pionniers

- 🔬 **1608** : Invention de la lunette (Pays-Bas)
- 🔭 **1609** : Galilée observe Jupiter et ses lunes
- ✨ **1668** : Newton invente le télescope à miroir
- 🏗️ **Aujourd'hui** : Télescopes géants de plusieurs mètres !
  - 🏜️ Dans le désert
  - 🛰️ En orbite spatiale

<br>

### 💡 Le saviez-vous ?
Le télescope a révolutionné notre compréhension de l'univers en montrant que la Terre n'est pas au centre de tout !

---
layout: two-cols
---

# Les Observatoires dans le Désert

## 🏜️ Pourquoi le désert ?

- Ciel très clair et sec
- Peu de pollution lumineuse
- Air stable en altitude
- 300+ nuits claires par an

### Exemple : L'ESO au Chili

L'Observatoire Européen Austral (ESO) est situé dans le désert d'Atacama, l'un des meilleurs sites au monde pour l'observation astronomique.

---
layout: image
image: /eso1225c.jpg
backgroundSize: contain
---

<div class="absolute bottom-10 left-0 right-0 text-center">
  <h2 class="text-xl font-bold bg-black bg-opacity-70 inline-block px-8 py-4 rounded-lg">
    Vue du Very Large Telescope (VLT) de l'ESO au Chili
  </h2>
</div>

---
layout: image-right
image: /The_joint_ESA_NASA_Hubble_Space_Telescope.jpg
---

# Le Télescope Spatial Hubble

## 🛰️ En orbite depuis 1990

### Caractéristiques :
- Orbite à **547 km** d'altitude
- Miroir de **2,4 mètres**
- Pas d'atmosphère = images nettes !
- Observe l'univers en continu

### Découvertes majeures :
- ✨ Âge de l'univers : 13,8 milliards d'années
- 🌌 Des milliers de galaxies lointaines
- 🪐 Aurores sur Jupiter et Saturne
- 💫 Naissance et mort d'étoiles

---
layout: default
---

### L'incroyable Télescope Hubble

---
layout: default
---

## Les Images Iconiques d'Hubble

<div class="grid grid-cols-3 gap-4 mt-3">
  <div class="text-center">
    <div class="aspect-square bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg mb-2">
    <img src="/03-space-eagle-nebula.jpg" class="rounded-lg w-full h-full object-cover" />
    </div>
    <p class="text-xs">Nébuleuse de l'Aigle<br>"Piliers de la Création"</p>
  </div>
  <div class="text-center">
    <div class="aspect-square bg-gradient-to-br from-red-900 to-orange-900 rounded-lg mb-2">
    <img src="/RingNebula11.png" class="rounded-lg w-full h-full object-cover" /></div>
    <p class="text-xs">Nébuleuse de la Lyre<br>"Œil de Dieu"</p>
  </div>
  <div class="text-center">
    <div class="aspect-square bg-gradient-to-br from-blue-900 to-green-900 rounded-lg mb-2">
    <img src="/500px-Hubble_Interacting_Galaxy_NGC_6050.jpg" class="rounded-lg w-full h-full object-cover" /></div>
    <p class="text-xs">Galaxies en collision<br>"Antennes"</p>
  </div>
</div>

<div class="mt-8">
  <p class="text-sm">
    💡 Hubble a transformé notre vision de l'univers. Ses images ont inspiré des millions de personnes 
    et permis des découvertes scientifiques majeures sur l'expansion de l'univers, les trous noirs, 
    et la formation des galaxies.
  </p>
</div>

---
layout: two-cols
---

# Le Télescope James Webb (JWST)

## 🚀 Le successeur d'Hubble

**Lancement** : 25 décembre 2021

### Caractéristiques :
- Miroir géant de **6,5 mètres** !
- Observe en **infrarouge**
- Position : à **1,5 million km** de la Terre
- Bouclier thermique de la taille d'un court de tennis

### Capacités :
- 🔍 Voir les premières galaxies
- 🪐 Étudier les exoplanètes et les trous noirs
- ⭐ Observer la naissance des étoiles
- 🌡️ Températures de -233°C !

---
layout: center
class: text-center
---

# L'Exploration Continue

## De la lunette de Galilée au James Webb

<div class="grid grid-cols-4 gap-4 mt-8 text-xs">
  <div>
    <div class="text-4xl mb-2">🔭</div>
    <p><strong>1609</strong><br>Lunette de Galilée<br>~2 cm</p>
  </div>
  <div>
    <div class="text-4xl mb-2">🏜️</div>
    <p><strong>1990s</strong><br>VLT (Désert)<br>8,2 m</p>
  </div>
  <div>
    <div class="text-4xl mb-2">🛰️</div>
    <p><strong>1990</strong><br>Hubble<br>2,4 m</p>
  </div>
  <div>
    <div class="text-4xl mb-2">🚀</div>
    <p><strong>2021</strong><br>James Webb<br>6,5 m</p>
  </div>
</div>

<div class="mt-12">
  <h3 class="text-2xl font-bold">Chaque génération de télescopes nous permet de voir plus loin dans l'espace et dans le temps !</h3>
</div>
`;
