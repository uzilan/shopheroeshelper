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
      // tier 1
      {
        name: 'Robert',
        title: 'Armorer',
        tier: 1,
        specializations: [spec.armor, spec.metal],
        image: 'Armorer.png'
      },
      {
        name: 'William',
        title: 'Blacksmith',
        tier: 1,
        specializations: [spec.metal, spec.weapon],
        image: 'Blacksmith.png'
      },
      {
        name: 'John',
        title: 'Carpenter',
        tier: 1,
        specializations: [spec.weapon, spec.wood],
        image: 'Carpenter.png'
      },
      {
        name: 'Moon',
        title: 'Druid',
        tier: 1,
        specializations: [spec.alchemy, spec.wood],
        image: 'Druid.png'
      },
      {
        name: 'Jenn',
        title: 'Leatherworker',
        tier: 1,
        specializations: [spec.armor, spec.textile],
        image: 'Leatherworker.png'
      },
      {
        name: 'Swyft',
        title: 'Tailor',
        tier: 1,
        specializations: [spec.arts, spec.textile],
        image: 'Tailor.png'
      },
      // tier 2
      {
        name: 'Fran',
        title: 'Artificer',
        tier: 2,
        specializations: [spec.armor, spec.tinkering],
        image: 'Artificer.png'
      },
      {
        name: 'Fladnagton',
        title: 'Enchanter',
        tier: 2,
        specializations: [spec.magic, spec.rune],
        image: 'Enchanter.png'
      },
      {
        name: 'Marcus',
        title: 'Fletcher',
        tier: 2,
        specializations: [spec.arts, spec.weapon],
        image: 'Fletcher.png'
      },
      {
        name: 'Ruth',
        title: 'Jeweler',
        tier: 2,
        specializations: [spec.metal, spec.jewelry],
        image: 'Jeweler.png'
      },
      {
        name: 'Margareth',
        title: 'Luthier',
        tier: 2,
        specializations: [spec.textile, spec.wood],
        image: 'Luthier.png'
      },
      {
        name: 'Angelina',
        title: 'Sorceress',
        tier: 2,
        specializations: [spec.alchemy, spec.magic],
        image: 'Sorceress.png'
      },
      // tier 3
      {
        name: 'Rosalina',
        title: 'Alchemist',
        tier: 3,
        specializations: [spec.alchemy, spec.magic, spec.tinkering],
        image: 'Alchemist.png'
      },
      {
        name: 'Eleonor',
        title: 'Artisan',
        tier: 3,
        specializations: [spec.arts, spec.textile, spec.jewelry],
        image: 'Artisan.png'
      },
      {
        name: 'Igor',
        title: 'Master',
        tier: 3,
        specializations: [spec.armor, spec.metal, spec.weapon],
        image: 'Master.png'
      },
      {
        name: 'Camilla',
        title: 'Seamstress',
        tier: 3,
        specializations: [spec.armor, spec.arts, spec.textile],
        image: 'Seamstress.png'
      },
      {
        name: 'Anthon',
        title: 'Sculptor',
        tier: 3,
        specializations: [spec.jewelry, spec.arts, spec.wood],
        image: 'Sculptor.png'
      },
      {
        name: 'Christina',
        title: 'Wizard',
        tier: 3,
        specializations: [spec.alchemy, spec.magic, spec.rune],
        image: 'Wizard.png'
      },
      // tier 4
      {
        name: 'The Giant',
        title: 'Giant',
        tier: 4,
        specializations: [spec.metal, spec.weapon, spec.magic, spec.rune],
        image: 'Giant.png'
      },
      // tier 5
      {
        name: 'Jack',
        title: 'Jack',
        tier: 5,
        specializations: _.without(_.toArray(spec), spec.mastery),
        image: 'Jack.png'
      }
    ];

    _.forEach(vm.workers, function (w) {
      w.level = 1;
      w.points = {};
      if (w.name !== 'Jack') { // add mastery to every worker except Jack
        w.specializations.push(spec.mastery);
      }
      _.forEach(w.specializations, function (s) {
        w.points[s.name] = 0;
      });
    });

    vm.service.workers = vm.workers;

    return vm.service;
  });
