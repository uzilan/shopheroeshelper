'use strict';

/**
 * @ngdoc service
 * @name shopheroesApp.worker
 * @description
 * # worker
 * Factory in the shopheroesApp.
 */
angular.module('shopheroesApp')
  .factory('workerStructure', function () {

    var vm = this;

    vm.specializations = {
      armor: {name: 'Armor Crafting', img: 'armor.png'},
      metal: {name: 'Metal Working', img: 'metal.png'},
      weapon: {name: 'Weapon Crafting', img: 'weapon.png'},
      wood: {name: 'Wood Working', img: 'wood.png'},
      alchemy: {name: 'Alchemy', img: 'alchemy.png'},
      textile: {name: 'Textile Working', img: 'textile.png'},
      arts: {name: 'Arts & Crafts', img: 'arts.png'},
      tinkering: {name: 'Tinkering', img: 'tinkering.png'},
      magic: {name: 'Magic', img: 'magic.png'},
      rune: {name: 'Rune Writing', img: 'rune.png'},
      jewelry: {name: 'Jewelry', img: 'jewelry.png'},
      mastery: {name: 'Mastery', img: 'jewelry.png'}
    };

    vm.service = {
      specializations: vm.specializations,
    };

    var spec = vm.service.specializations;

    vm.workers = [
      {
        name: 'Robert',
        title: 'Armorer',
        tier: 1,
        specializations: [spec.armor, spec.metal]
      },
      {
        name: 'William',
        title: 'Blacksmith',
        tier: 1,
        specializations: [spec.metal, spec.weapon]
      },
      {
        name: 'John',
        title: 'Carpenter',
        tier: 1,
          specializations: [spec.weapon, spec.wood]
      },
      {
        name: 'Moon',
        title: 'Druid',
        tier: 1,
        specializations: [spec.alchemy, spec.wood]
      },
      {
        name: 'Jenn',
        title: 'Leatherworker',
        tier: 1,
        specializations: [spec.armor, spec.textile]
      },
      {
        name: 'Swyft',
        title: 'Tailor',
        tier: 1,
        specializations: [spec.arts, spec.textile]
      },
      {
        name: 'Fran',
        title: 'Artificer',
        tier: 2,
        specializations: [spec.armor, spec.tinkering]
      },
      {
        name: 'Fladnagton',
        title: 'Enchanter',
        tier: 2,
        specializations: [spec.magic, spec.rune]
      },
      {
        name: 'Marcus',
        title: 'Fletcher',
        tier: 2,
        specializations: [spec.arts, spec.weapon]
      },
      {
        name: 'Ruth',
        title: 'Jeweler',
        tier: 2,
        specializations: [spec.metal, spec.jewelry]
      },
      {
        name: 'Margareth',
        title: 'Luthier',
        tier: 2,
        specializations: [spec.textile, spec.wood]
      },
      {
        name: 'Angelina',
        title: 'Sorceress',
        tier: 2,
        specializations: [spec.alchemy, spec.magic]
      },
      {
        name: 'Rosalina',
        title:  'Alchemist',
        tier: 3,
        specializations: [spec.alchemy, spec.magic, spec.tinkering]
      },
      {
        name: 'Eleonor',
        title: 'Artisan',
        tier: 3,
        specializations: [spec.arts, spec.textile, spec.jewelry]
      },
      {
        name: 'Igor',
        title: 'Master',
        tier: 3,
        specializations: [spec.armor, spec.metal, spec.weapon]
      },
      {
        name: 'Camilla',
        title: 'Seamstress',
        tier: 3,
        specializations: [spec.armor, spec.arts, spec.textile]
      },
      {
        name: 'Anthon',
        title: 'Sculptor',
        tier: 3,
        specializations: [spec.jewelry, spec.arts, spec.wood]
      },
      {
        name: 'Christina',
        title: 'Wizard',
        tier: 3,
        specializations: [spec.alchemy, spec.magic, spec.rune]
      }
    ];

    _.forEach(vm.workers, function(w) {
      w.level = 0;
      w.points = {};
      w.specializations.push(spec.mastery);
      _.forEach(w.specializations, function(s) {
        w.points[s.name] = 0;
      });
    });

    vm.service.workers = vm.workers;

    return vm.service;
  });
