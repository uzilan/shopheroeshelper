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
      armor: {name: 'Armor Crafting'},
      metal: {name: 'Metal Working'},
      weapon: {name: 'Weapon Crafting'},
      wood: {name: 'Wood Working'},
      alchemy: {name: 'Alchemy'},
      textile: {name: 'Textile Working'},
      arts: {name: 'Arts & Crafts'},
      tinkering: {name: 'Tinkering'},
      magic: {name: 'Magic'},
      rune: {name: 'Rune Writing'},
      jewelry: {name: 'Jewelry'}
    };


    vm.service = {
      specializations: vm.specializations,
    };

    var spec = vm.service.specializations;

    vm.workers = [
      {
        name: 'Armorer',
        tier: 1,
        specializations: [spec.armor, spec.metal]
      },
      {
        name: 'Blacksmith',
        tier: 1,
        specializations: [spec.metal, spec.weapon]
      },
      {
        name: 'Carpenter',
        tier: 1,
          specializations: [spec.weapon, spec.wood]
      },
      {
        name: 'Druid',
        tier: 1,
        specializations: [spec.alchemy, spec.wood]
      },
      {
        name: 'Leatherworker',
        tier: 1,
        specializations: [spec.armor, spec.textile]
      },
      {
        name: 'Tailor',
        tier: 1,
        specializations: [spec.arts, spec.textile]
      },
      {
        name: 'Artificer',
        tier: 2,
        specializations: [spec.armor, spec.tinkering]
      },
      {
        name: 'Enchanter',
        tier: 2,
        specializations: [spec.magic, spec.rune]
      },
      {
        name: 'Fletcher',
        tier: 2,
        specializations: [spec.arts, spec.weapon]
      },
      {
        name: 'Jeweler',
        tier: 2,
        specializations: [spec.metal, spec.jewelry]
      },
      {
        name: 'Luthier',
        tier: 2,
        specializations: [spec.textile, spec.wood]
      },
      {
        name: 'Sorceress',
        tier: 2,
        specializations: [spec.alchemy, spec.magic]
      },
      {
        name: 'Alchemist',
        tier: 3,
        specializations: [spec.alchemy, spec.magic, spec.tinkering]
      },
      {
        name: 'Artisan',
        tier: 3,
        specializations: [spec.arts, spec.textile, spec.jewelry]
      },
      {
        name: 'Master',
        tier: 3,
        specializations: [spec.armor, spec.metal, spec.weapon]
      },
      {
        name: 'Seamstress',
        tier: 3,
        specializations: [spec.armor, spec.arts, spec.textile]
      },
      {
        name: 'Sculptor',
        tier: 3,
        specializations: [spec.jewelry, spec.arts, spec.wood]
      },
      {
        name: 'Wizard',
        tier: 3,
        specializations: [spec.alchemy, spec.magic, spec.rune]
      }
    ];

    vm.service.workers = vm.workers;

    return vm.service;
  });
