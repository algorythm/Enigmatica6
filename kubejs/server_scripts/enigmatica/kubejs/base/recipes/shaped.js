events.listen('recipes', (event) => {
    var recipes = [
        shapedRecipe('tetra:hammer_base', ['LXL', 'LCL', 'LXL'], {
            L: '#forge:ingots/steel',
            X: '#forge:circuits/basic',
            C: '#morevanillalib:tools'
        }),
        shapedRecipe('tetra:core_extractor', ['LXL', 'LCL', 'LXL'], {
            L: '#forge:ingots/steel',
            X: '#forge:circuits/basic',
            C: 'industrialforegoing:fluid_extractor'
        }),
        shapedRecipe(Item.of('minecraft:stick', 16), ['A', 'A'], {
            A: '#minecraft:logs'
        }),

        shapedRecipe('minecraft:hopper', ['ABA', 'ABA', ' A '], {
            A: '#forge:ingots/iron',
            B: '#minecraft:logs'
        }),
        shapedRecipe('refinedstorageaddons:wireless_crafting_grid', ['ABA', 'ACA', 'ADA'], {
            A: 'refinedstorage:quartz_enriched_iron',
            B: 'refinedstorage:range_upgrade',
            C: 'refinedstorage:wireless_grid',
            D: 'minecraft:crafting_table'
        }),
        shapedRecipe('simplefarming:fish_and_chips', [' A ', 'BCB', ' A '], {
            A: '#forge:crops/potato',
            B: '#forge:grain',
            C: 'aquaculture:fish_fillet_cooked'
        }),
        shapedRecipe('minecraft:furnace', ['LLL', 'L L', 'LLL'], {
            L: '#forge:stone'
        }),
        shapedRecipe('minecraft:tube_coral_block', ['AA', 'AA'], {
            A: 'minecraft:tube_coral_fan'
        }),
        shapedRecipe('minecraft:brain_coral_block', ['AA', 'AA'], {
            A: 'minecraft:brain_coral_fan'
        }),
        shapedRecipe('minecraft:bubble_coral_block', ['AA', 'AA'], {
            A: 'minecraft:bubble_coral_fan'
        }),
        shapedRecipe('minecraft:fire_coral_block', ['AA', 'AA'], {
            A: 'minecraft:fire_coral_fan'
        }),
        shapedRecipe('minecraft:horn_coral_block', ['AA', 'AA'], {
            A: 'minecraft:horn_coral_fan'
        }),
        shapedRecipe('minecraft:tube_coral_block', ['AA', 'AA'], {
            A: 'minecraft:tube_coral'
        }),
        shapedRecipe('minecraft:brain_coral_block', ['AA', 'AA'], {
            A: 'minecraft:brain_coral'
        }),
        shapedRecipe('minecraft:bubble_coral_block', ['AA', 'AA'], {
            A: 'minecraft:bubble_coral'
        }),
        shapedRecipe('minecraft:fire_coral_block', ['AA', 'AA'], {
            A: 'minecraft:fire_coral'
        }),
        shapedRecipe('minecraft:horn_coral_block', ['AA', 'AA'], {
            A: 'minecraft:horn_coral'
        }),
        shapedRecipe('decorative_blocks:lattice', ['A A', '   ', 'A A'], {
            A: '#forge:rods/wooden'
        }),
        shapedRecipe(Item.of('valhelsia_structures:oak_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:oak_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:spruce_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:spruce_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:birch_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:birch_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:jungle_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:jungle_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:dark_oak_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:dark_oak_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:acacia_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:acacia_log'
        }),
        shapedRecipe(Item.of('minecraft:ladder', 4), ['A A', 'ABA', 'A A'], {
            A: '#forge:rods/wooden',
            B: '#minecraft:planks'
        }),
        shapedRecipe(Item.of('engineersdecor:slag_brick_block', 8), ['AAA', 'ABA', 'AAA'], {
            A: '#engineersdecor:brick_ingots',
            B: '#forge:slag'
        }),
        shapedRecipe(Item.of('prettypipes:wrench', 1), [' A ', 'AB ', '  B'], {
            A: '#forge:nuggets/iron',
            B: 'prettypipes:pipe'
        }),
        shapedRecipe(Item.of('prettypipes:blank_module', 3), [' A ', 'BBB', 'CCC'], {
            A: '#forge:dusts/redstone',
            B: 'minecraft:stone_slab',
            C: '#forge:nuggets/copper'
        }),
        shapedRecipe(Item.of('prettypipes:low_extraction_module', 1), [' A ', ' B ', ' C '], {
            A: '#forge:dusts/redstone',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:medium_extraction_module', 1), [' C ', 'ABA', ' A '], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_extraction_module',
            C: '#forge:ingots/invar'
        }),
        shapedRecipe(Item.of('prettypipes:high_extraction_module', 1), [' C ', 'ABA', ' A '], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_extraction_module',
            C: '#forge:ingots/electrum'
        }),
        shapedRecipe(Item.of('prettypipes:low_filter_module', 1), [' A ', ' B ', ' C '], {
            A: '#forge:paper',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:medium_filter_module', 1), [' C ', 'ABA', ' C '], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_filter_module',
            C: 'minecraft:iron_bars'
        }),
        shapedRecipe(Item.of('prettypipes:high_filter_module', 1), [' C ', 'ABA', ' C '], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_filter_module',
            C: 'minecraft:iron_bars'
        }),
        shapedRecipe(Item.of('prettypipes:low_speed_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:sugar',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:medium_speed_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_speed_module',
            C: 'minecraft:sugar'
        }),
        shapedRecipe(Item.of('prettypipes:high_speed_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_speed_module',
            C: 'minecraft:sugar'
        }),
        shapedRecipe(Item.of('prettypipes:low_low_priority_module', 1), [' A ', ' B ', ' C '], {
            A: '#forge:nuggets/lead',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:medium_low_priority_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_low_priority_module',
            C: '#forge:nuggets/lead'
        }),
        shapedRecipe(Item.of('prettypipes:high_low_priority_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_low_priority_module',
            C: '#forge:nuggets/lead'
        }),
        shapedRecipe(Item.of('prettypipes:low_high_priority_module', 1), [' A ', ' B ', ' C '], {
            A: '#forge:nuggets/silver',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:medium_high_priority_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_high_priority_module',
            C: '#forge:nuggets/silver'
        }),
        shapedRecipe(Item.of('prettypipes:high_high_priority_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_high_priority_module',
            C: '#forge:nuggets/silver'
        }),
        shapedRecipe(Item.of('prettypipes:low_retrieval_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:observer',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:medium_retrieval_module', 1), [' A ', 'ABA', ' C '], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_retrieval_module',
            C: '#forge:ingots/invar'
        }),
        shapedRecipe(Item.of('prettypipes:high_retrieval_module', 1), [' A ', 'ABA', ' C '], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_retrieval_module',
            C: '#forge:ingots/electrum'
        }),
        shapedRecipe(Item.of('prettypipes:stack_size_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:comparator',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:damage_filter_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:stone_pickaxe',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:nbt_filter_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:book',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:tag_filter_modifier', 1), [' A ', ' B ', ' C '], {
            A: '#forge:chunks',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:mod_filter_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'prettypipes:wrench',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:redstone_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:redstone_torch',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:filter_increase_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:iron_bars',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:low_crafting_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:crafting_table',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:medium_crafting_module', 1), [' A ', 'ABA', ' C '], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_crafting_module',
            C: '#forge:ingots/invar'
        }),
        shapedRecipe(Item.of('prettypipes:high_crafting_module', 1), [' A ', 'ABA', ' C '], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_crafting_module',
            C: '#forge:ingots/electrum'
        }),
        shapedRecipe(Item.of('prettypipes:pipe', 12), ['   ', 'ABA', '   '], {
            A: '#forge:ingots/tin',
            B: '#forge:glass/colorless'
        }),
        shapedRecipe(Item.of('prettypipes:item_terminal', 1), [' B ', 'CAD', 'EFE'], {
            A: 'thermal:machine_frame',
            B: 'minecraft:observer',
            C: 'prettypipes:high_extraction_module',
            D: 'prettypipes:high_retrieval_module',
            E: '#forge:gears/invar',
            F: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:pressurizer', 1), [' E ', 'BAB', 'CDC'], {
            A: 'thermal:machine_frame',
            B: 'prettypipes:high_speed_module',
            C: '#forge:gears/invar',
            D: 'thermal:rf_coil',
            E: 'prettypipes:pipe'
        }),
        shapedRecipe(Item.of('prettypipes:round_robin_sorting_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:clock',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:random_sorting_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:dropper',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('bloodmagic:demonwillgauge', 1), [' B ', 'ACA', ' B '], {
            A: '#forge:ingots/tin',
            B: '#forge:nuggets/tin',
            C: '#bloodmagic:crystals/demon'
        }),
        shapedRecipe(Item.of('emendatusenigmatica:steel_ingot', 2), ['AA'], {
            A: 'immersiveengineering:ingot_steel'
        }),
        shapedRecipe(Item.of('immersiveengineering:ingot_steel', 2), ['AA'], {
            A: 'mekanism:ingot_steel'
        }),
        shapedRecipe(Item.of('mekanism:ingot_steel', 2), ['AA'], {
            A: 'emendatusenigmatica:steel_ingot'
        }),
        shapedRecipe('tetra:combustion_chamber', ['CBC', 'BAB', 'CBC'], {
            A: 'mekanism:superheating_element',
            B: 'pneumaticcraft:heat_sink',
            C: 'mekanism:ultimate_thermodynamic_conductor'
        }),
        // Remove in 0.4.0
        shapedRecipe(Item.of('minecraft:lapis_lazuli', 4), ['AAA', 'ABA', 'AAA'], {
            A: '#forge:gems/certus_quartz',
            B: '#forge:dyes/blue'
        }),
        shapedRecipe(Item.of('minecraft:diamond', 1), ['AAA', 'ABA', 'AAA'], {
            A: '#forge:gems/certus_quartz',
            B: '#forge:dyes/light_blue'
        }),
        shapedRecipe(Item.of('minecraft:emerald', 2), ['AAA', 'ABA', 'AAA'], {
            A: '#forge:gems/certus_quartz',
            B: '#forge:dyes/green'
        }),
        shapedRecipe(Item.of('minecraft:lapis_lazuli', 4), ['AAA', 'ABA', 'AAA'], {
            A: '#forge:gems/charged_certus_quartz',
            B: '#forge:dyes/blue'
        }),
        shapedRecipe(Item.of('minecraft:diamond', 1), ['AAA', 'ABA', 'AAA'], {
            A: '#forge:gems/charged_certus_quartz',
            B: '#forge:dyes/light_blue'
        }),
        shapedRecipe(Item.of('minecraft:emerald', 2), ['AAA', 'ABA', 'AAA'], {
            A: '#forge:gems/charged_certus_quartz',
            B: '#forge:dyes/green'
        }),
        shapedRecipe('magicfeather:magicfeather', ['CFC', 'BDB', 'AEA'], {
            A: 'alexsmobs:roadrunner_feather',
            B: '#forge:ingots/enderium',
            C: 'ars_nouveau:mana_fiber',
            D: 'paraglider:deku_leaf',
            E: 'ars_nouveau:glyph_launch',
            F: 'ars_nouveau:glyph_slowfall'
        }),
        shapedRecipe('magicfeather:magicfeather', ['CFC', 'BDB', 'AEA'], {
            A: 'thermal:lightning_charge',
            B: '#mekanism:alloys/atomic',
            C: 'thermal:hazmat_fabric',
            D: 'paraglider:deku_leaf',
            E: 'thermal:hazmat_boots',
            F: 'alexsmobs:frontier_cap'
        }),
        shapedRecipe(
            Item.of('morphtool:tool').nbt({
                'morphtool:data': {
                    blockcarpentry: { id: 'blockcarpentry:texture_wrench', Count: 1 },
                    powah: { id: 'powah:wrench', Count: 1 },
                    resourcefulbees: { id: 'resourcefulbees:scraper', Count: 1 },
                    astralsorcery: { id: 'astralsorcery:wand', Count: 1 },
                    pneumaticcraft: { id: 'pneumaticcraft:pneumatic_wrench', Count: 1 },
                    immersiveengineering: { id: 'immersiveengineering:hammer', Count: 1 },
                    transport: { id: 'transport:rail_breaker', Count: 1 },
                    pedestals: { id: 'pedestals:linkingtool', Count: 1 },
                    botania: { id: 'botania:twig_wand', Count: 1, tag: { color1: 0, color2: 0 } },
                    ars_nouveau: { id: 'ars_nouveau:dominion_wand', Count: 1 },
                    mekanism: { id: 'mekanism:configurator', Count: 1 },
                    bloodmagic: { id: 'bloodmagic:ritualtinkerer', Count: 1 },
                    thermal: { id: 'thermal:wrench', Count: 1 },
                    rftoolsbase: { id: 'rftoolsbase:smartwrench', Count: 1 },
                    create: { id: 'create:wrench', Count: 1 },
                    chiselsandbits: { id: 'chiselsandbits:wrench_wood', Count: 1 },
                    refinedstorage: { id: 'refinedstorage:wrench', Count: 1 },
                    prettypipes: { id: 'prettypipes:wrench', Count: 1 },
                    storagedrawers: { id: 'storagedrawers:drawer_key', Count: 1 },
                    fluxnetworks: { id: 'fluxnetworks:flux_configurator', Count: 1 },
                    integratedtunnels: { id: 'integrateddynamics:wrench', Count: 1 }
                }
            }),
            ['ABA', 'CFD', 'AEA'],
            {
                A: 'minecraft:redstone_block',
                B: '#forge:gears/gold',
                C: '#forge:gears/iron',
                D: '#forge:gears/silver',
                E: '#forge:gears/copper',
                F: 'morphtool:tool'
            }
        ),
        shapedRecipe(Item.of('occultism:candle_white'), [' B ', 'AAA', 'AAA'], {
            A: '#forge:wax',
            B: '#forge:string'
        }),
        shapedRecipe(Item.of('eidolon:candle', 4), ['B', 'A'], {
            A: '#forge:wax',
            B: '#forge:string'
        }),
        shapedRecipe(Item.of('quark:white_candle', 2), ['B', 'A', 'A'], {
            A: '#forge:wax',
            B: '#forge:string'
        }),
        shapedRecipe(Item.of('byg:embur_hyphae', 3), ['AA', 'AA'], {
            A: 'byg:embur_pedu'
        }),
        shapedRecipe(Item.of('fluxnetworks:flux_controller', 1), ['ABA', 'CDC', 'AAA'], {
            A: 'fluxnetworks:flux_block',
            B: 'fluxnetworks:flux_core',
            C: 'fluxnetworks:flux_dust',
            D: 'powah:player_transmitter_nitro'
        }),
        shapedRecipe(Item.of('fluxnetworks:flux_core', 8), ['ABA', 'BCB', 'ABA'], {
            A: 'fluxnetworks:flux_dust',
            B: '#forge:obsidian',
            C: 'powah:ender_core'
        }),

        //ID Overrides
        shapedRecipe(Item.of('minecraft:honeycomb_block'), ['AAA', 'AAA', 'AAA'], {
            A: 'minecraft:honeycomb'
        },
        'minecraft:honeycomb_block')
    ];

    recipes.forEach(function (recipe) {
        if (recipe.id) {
            event.shaped(recipe.result, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.result, recipe.pattern, recipe.key);
        }
    });

    buildWoodVariants.forEach((wood) => {
        if (wood.modId == 'minecraft') {
            return;
        }
        event.shaped(Item.of('minecraft:oak_sign', 3), ['AAA', 'AAA', ' B '], {
            A: wood.plankBlock,
            B: '#forge:rods/wooden'
        });
        event.shaped(Item.of('minecraft:chest'), ['AAA', 'A A', 'AAA'], {
            A: wood.plankBlock
        });
    });

    powahTiers.forEach(function (tier) {
        var capacitor = 'powah:capacitor_' + tier,
            crystal = 'powah:crystal_' + tier;

        if (tier == 'basic' || tier == 'starter') {
            return;
        } else if (tier == 'hardened') {
            crystal = 'powah:steel_energized';
        }

        event.shaped(Item.of('powah:energy_cell_' + tier), ['ABA', 'BCB', 'ABA'], {
            A: crystal,
            B: capacitor,
            C: '#powah:energy_cell'
        });

        event.shaped(Item.of('powah:ender_cell_' + tier), [' A ', 'ABA', ' A '], {
            A: crystal,
            B: '#powah:ender_cell'
        });

        event.shaped(Item.of('powah:energizing_rod_' + tier), ['   ', 'ACA', ' B '], {
            A: capacitor,
            B: 'powah:energy_cable_' + tier,
            C: '#powah:energizing_rod'
        });

        event.shaped(Item.of('powah:furnator_' + tier), ['AAA', 'BCB', 'A A'], {
            A: crystal,
            B: capacitor,
            C: '#powah:furnator'
        });

        event.shaped(Item.of('powah:magmator_' + tier), ['AAA', 'BCB', 'A A'], {
            A: crystal,
            B: capacitor,
            C: '#powah:magmator'
        });

        event.shaped(Item.of('powah:thermo_generator_' + tier), [' A ', 'BCB'], {
            A: crystal,
            B: capacitor,
            C: '#powah:thermo_generator'
        });

        event.shaped(Item.of('powah:solar_panel_' + tier), ['BCB', 'AAA'], {
            A: crystal,
            B: capacitor,
            C: '#powah:solar_panel'
        });

        event.shaped(Item.of('powah:reactor_' + tier), [' A ', 'ABA', ' A '], {
            A: capacitor,
            B: '#powah:reactor'
        });

        event.shaped(Item.of('powah:energy_hopper_' + tier), ['ABA'], {
            A: capacitor,
            B: '#powah:energy_hopper'
        });

        event.shaped(Item.of('powah:energy_discharger_' + tier), [' A ', ' B ', ' A '], {
            A: capacitor,
            B: '#powah:energy_discharger'
        });

        event.shaped(Item.of('powah:battery_' + tier), [' A ', 'BCB', ' B '], {
            A: crystal,
            B: capacitor,
            C: '#powah:battery'
        });
    });
});
