export const restaurants = {
  data: {
    AppPresentation_queryAppListV2: [
      {
        __typename: "AppPresentation_QueryAppListResponse",
        barItems: [
          {
            __typename: "AppPresentation_MapBarItem",
            stableDiffingType: "MapBarItemData",
            surfaces: ["LIST"],
            buttonText: {
              __typename: "AppPresentation_LocalizedString",
              string: "Map",
              debugValueKey: null,
            },
            trackingKey:
              '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_barItems_0","sn":"Attractions","biv":"Map"}',
            trackingTitle: "MapBarItemData",
          },
          {
            __typename: "AppPresentation_ListBarItem",
            stableDiffingType: "ListBarItemData",
            surfaces: ["MAP"],
            buttonText: {
              __typename: "AppPresentation_LocalizedString",
              string: "List",
              debugValueKey: null,
            },
            trackingKey:
              '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_barItems_1","sn":"Attractions","biv":"List"}',
            trackingTitle: "ListBarItemData",
          },
          {
            __typename: "AppPresentation_FilterBarItem",
            stableDiffingType: "FilterBarItemData",
            surfaces: ["LIST", "MAP"],
            buttonText: {
              __typename: "AppPresentation_LocalizedString",
              string: "Filters",
              debugValueKey: null,
            },
            trackingKey:
              '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_barItems_2","sn":"Attractions","biv":"Filter_primary"}',
            trackingTitle: "FilterBarItemData",
          },
        ],
        container: {
          __typename: "AppPresentation_ListResponseContainer",
          navTitle: null,
          searchTitle: {
            __typename: "AppPresentation_LocalizedString",
            string: "Restaurants in Cairo",
            debugValueKey: null,
          },
          searchGhostText: null,
          showMapToggle: true,
          plusMarketingBanner: null,
          route: {
            __typename: "Routing_Route",
            fragment: null,
            page: "AppList",
            url: "/AppList-g294201-a_contentType.restaurant-a_sort.POPULARITY-a_sortAlgo.desc-a_isList.true.html",
            nonCanonicalUrl:
              "/AppList-g294201-a_contentType.restaurant-a_sort.POPULARITY-a_sortAlgo.desc-a_isList.true.html",
            typedParams: {
              __typename: "Routing_AppListParameters",
              contentType: "restaurant",
              geoId: 294201,
              isCollectionView: null,
              isList: true,
              isMap: null,
              isNearby: null,
              nearLocationId: null,
              nearLocationType: null,
              pagee: null,
              sort: "POPULARITY",
              sortOrder: "desc",
              routingFilters: null,
            },
          },
          datePicker: null,
        },
        quickLinks: null,
        filters: {
          __typename: "AppPresentation_FilterResponse",
          showAllText: {
            __typename: "AppPresentation_LocalizedString",
            string: "Show 4,000+ results",
            debugValueKey: null,
          },
          availableFilterGroups: [
            {
              __typename: "AppPresentation_StandardFilterGroup",
              name: "Filters",
              groupType: "StandardFilterGroup",
              tooltip: null,
              filters: [
                {
                  __typename: "AppPresentation_MultiValueFilter",
                  trackingKey:
                    '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_filterGroups_0_0","lid":294201,"fn":"establishment","sn":"Attractions"}',
                  trackingTitle: "APSMultiValueFilter_establishment",
                  title: "Establishment Type",
                  name: "establishment",
                  surfaces: ["LIST", "MAP"],
                  tooltip: null,
                  values: [
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 4381,
                      value: "10591",
                      isSelected: true,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Restaurants",
                          tagId: 10591,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Restaurants filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Restaurants filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 66,
                      value: "9900",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Coffee & Tea",
                          tagId: 9900,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Coffee & Tea filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Coffee & Tea filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 53,
                      value: "9909",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Dessert",
                          tagId: 9909,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Dessert filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Dessert filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 50,
                      value: "11776",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Bars & Pubs",
                          tagId: 11776,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Bars & Pubs filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Bars & Pubs filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 34,
                      value: "9901",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Bakeries",
                          tagId: 9901,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Bakeries filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Bakeries filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 30,
                      value: "16556",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Quick Bites",
                          tagId: 16556,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Quick Bites filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Quick Bites filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "21908",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Delivery Only",
                          tagId: 21908,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Delivery Only filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Delivery Only filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                  ],
                },
                {
                  __typename: "AppPresentation_MultiValueFilter",
                  trackingKey:
                    '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_filterGroups_0_1","lid":294201,"fn":"option","sn":"Attractions"}',
                  trackingTitle: "APSMultiValueFilter_option",
                  title: "Restaurant Features",
                  name: "option",
                  surfaces: ["LIST", "MAP"],
                  tooltip: null,
                  values: [
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 486,
                      value: "10602",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Reservations",
                          tagId: 10602,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Reservations filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Reservations filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 473,
                      value: "10852",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Seating",
                          tagId: 10852,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Seating filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Seating filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 433,
                      value: "16547",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Table Service",
                          tagId: 16547,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Table Service filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Table Service filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 276,
                      value: "10601",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Takeout",
                          tagId: 10601,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Takeout filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Takeout filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 179,
                      value: "10861",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Wheelchair Accessible",
                          tagId: 10861,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Wheelchair Accessible filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Wheelchair Accessible filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 171,
                      value: "10862",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Serves Alcohol",
                          tagId: 10862,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Serves Alcohol filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Serves Alcohol filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 159,
                      value: "10600",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Delivery",
                          tagId: 10600,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Delivery filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Delivery filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 147,
                      value: "11780",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Accepts Credit Cards",
                          tagId: 11780,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Accepts Credit Cards filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Accepts Credit Cards filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 146,
                      value: "10854",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Parking Available",
                          tagId: 10854,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Parking Available filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Parking Available filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 143,
                      value: "10603",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Outdoor Seating",
                          tagId: 10603,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Outdoor Seating filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Outdoor Seating filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 132,
                      value: "10870",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Free Wifi",
                          tagId: 10870,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Free Wifi filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Free Wifi filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 103,
                      value: "10863",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Full Bar",
                          tagId: 10863,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Full Bar filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Full Bar filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 84,
                      value: "10857",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Valet Parking",
                          tagId: 10857,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Valet Parking filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Valet Parking filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 84,
                      value: "10860",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Highchairs Available",
                          tagId: 10860,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Highchairs Available filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Highchairs Available filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 80,
                      value: "10867",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Accepts Visa",
                          tagId: 10867,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Accepts Visa filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Accepts Visa filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 79,
                      value: "10866",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Accepts Mastercard",
                          tagId: 10866,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Accepts Mastercard filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Accepts Mastercard filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 70,
                      value: "10864",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Wine and Beer",
                          tagId: 10864,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Wine and Beer filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Wine and Beer filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 68,
                      value: "10859",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Television",
                          tagId: 10859,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Television filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Television filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 57,
                      value: "10856",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Validated Parking",
                          tagId: 10856,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Validated Parking filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Validated Parking filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 53,
                      value: "10855",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Street Parking",
                          tagId: 10855,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Street Parking filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Street Parking filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 48,
                      value: "10865",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Accepts American Express",
                          tagId: 10865,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Accepts American Express filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Accepts American Express filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 35,
                      value: "10702",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Private Dining",
                          tagId: 10702,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Private Dining filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Private Dining filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 32,
                      value: "20989",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Live Music",
                          tagId: 20989,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Live Music filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Live Music filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 28,
                      value: "10869",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Cash Only",
                          tagId: 10869,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Cash Only filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Cash Only filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 27,
                      value: "21271",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Family style",
                          tagId: 21271,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Family style filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Family style filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 23,
                      value: "10612",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Buffet",
                          tagId: 10612,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Buffet filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Buffet filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 22,
                      value: "10858",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Free off-street parking",
                          tagId: 10858,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Free off-street parking filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Free off-street parking filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 17,
                      value: "21907",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Gift Cards Available",
                          tagId: 21907,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Gift Cards Available filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Gift Cards Available filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 13,
                      value: "10868",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Digital Payments",
                          tagId: 10868,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Digital Payments filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Digital Payments filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 9,
                      value: "21379",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Non-smoking restaurants",
                          tagId: 21379,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Non-smoking restaurants filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Non-smoking restaurants filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "10871",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Accepts Discover",
                          tagId: 10871,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Accepts Discover filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Accepts Discover filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "20990",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Waterfront",
                          tagId: 20990,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Waterfront filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Waterfront filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "20992",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Drive Thru",
                          tagId: 20992,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Drive Thru filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Drive Thru filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "20996",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Dog Friendly",
                          tagId: 20996,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Dog Friendly filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Dog Friendly filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "21381",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Sports bars",
                          tagId: 21381,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Sports bars filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Sports bars filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20991",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Jazz Bar",
                          tagId: 20991,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Jazz Bar filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Jazz Bar filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20993",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Beach",
                          tagId: 20993,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Beach filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Beach filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20995",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Playgrounds",
                          tagId: 20995,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Playgrounds filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Playgrounds filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                  ],
                },
                {
                  __typename: "AppPresentation_MultiValueFilter",
                  trackingKey:
                    '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_filterGroups_0_2","lid":294201,"fn":"meal","sn":"Attractions"}',
                  trackingTitle: "APSMultiValueFilter_meal",
                  title: "Meals",
                  name: "meal",
                  surfaces: ["LIST", "MAP"],
                  tooltip: null,
                  values: [
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 340,
                      value: "10597",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Breakfast",
                          tagId: 10597,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Breakfast filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Breakfast filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 169,
                      value: "10606",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Brunch",
                          tagId: 10606,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Brunch filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Brunch filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 763,
                      value: "10598",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Lunch",
                          tagId: 10598,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Lunch filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Lunch filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1328,
                      value: "10599",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Dinner",
                          tagId: 10599,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Dinner filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Dinner filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                  ],
                },
                {
                  __typename: "AppPresentation_MultiValueFilter",
                  trackingKey:
                    '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_filterGroups_0_3","lid":294201,"fn":"price","sn":"Attractions"}',
                  trackingTitle: "APSMultiValueFilter_price",
                  title: "Price",
                  name: "price",
                  surfaces: ["LIST", "MAP"],
                  tooltip: null,
                  values: [
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 170,
                      value: "10953",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_SimpleTextFilterValue",
                        text: "$",
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Cheap Eats filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Cheap Eats filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 506,
                      value: "10955",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_SimpleTextFilterValue",
                        text: "$$ - $$$",
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Mid-range filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Mid-range filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 82,
                      value: "10954",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_SimpleTextFilterValue",
                        text: "$$$$",
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Fine Dining filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Fine Dining filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                  ],
                },
                {
                  __typename: "AppPresentation_MultiValueFilter",
                  trackingKey:
                    '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_filterGroups_0_4","lid":294201,"fn":"commerce","sn":"Attractions"}',
                  trackingTitle: "APSMultiValueFilter_commerce",
                  title: "Online Options",
                  name: "commerce",
                  surfaces: ["LIST", "MAP"],
                  tooltip: null,
                  values: [
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 30,
                      value: "20693",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Online Reservations ",
                          tagId: 20693,
                        },
                      },
                      selectedAccessibilityString: null,
                      unselectedAccessibilityString: null,
                      tooltip: null,
                    },
                  ],
                },
                {
                  __typename: "AppPresentation_MultiValueFilter",
                  trackingKey:
                    '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_filterGroups_0_5","lid":294201,"fn":"openNow","sn":"Attractions"}',
                  trackingTitle: "APSMultiValueFilter_openNow",
                  title: "Open Now",
                  name: "openNow",
                  surfaces: ["LIST", "MAP"],
                  tooltip: null,
                  values: [
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: null,
                      value: "true",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_SimpleTextFilterValue",
                        text: "Open Now",
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Disable filter: Open Now",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Enable filter: Open Now",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                  ],
                },
                {
                  __typename: "AppPresentation_MultiValueFilter",
                  trackingKey:
                    '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_filterGroups_0_6","lid":294201,"fn":"cuisine","sn":"Attractions"}',
                  trackingTitle: "APSMultiValueFilter_cuisine",
                  title: "Cuisine Type",
                  name: "cuisine",
                  surfaces: ["LIST", "MAP"],
                  tooltip: null,
                  values: [
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 321,
                      value: "10649",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Mediterranean",
                          tagId: 10649,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Mediterranean filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Mediterranean filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 257,
                      value: "10784",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Egyptian",
                          tagId: 10784,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Egyptian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Egyptian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 209,
                      value: "4617",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Italian",
                          tagId: 4617,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Italian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Italian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 207,
                      value: "10643",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Seafood",
                          tagId: 10643,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Seafood filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Seafood filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 185,
                      value: "10648",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "International",
                          tagId: 10648,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove International filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply International filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 179,
                      value: "10687",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Middle Eastern",
                          tagId: 10687,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Middle Eastern filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Middle Eastern filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 157,
                      value: "9908",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "American",
                          tagId: 9908,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove American filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply American filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 113,
                      value: "10641",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Pizza",
                          tagId: 10641,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Pizza filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Pizza filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 112,
                      value: "10642",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Cafe",
                          tagId: 10642,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Cafe filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Cafe filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 112,
                      value: "10654",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "European",
                          tagId: 10654,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove European filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply European filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 82,
                      value: "10670",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Pub",
                          tagId: 10670,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Pub filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Pub filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 79,
                      value: "10646",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Fast Food",
                          tagId: 10646,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Fast Food filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Fast Food filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 76,
                      value: "10626",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Lebanese",
                          tagId: 10626,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Lebanese filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Lebanese filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 75,
                      value: "10659",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Asian",
                          tagId: 10659,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Asian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Asian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 61,
                      value: "5473",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Japanese",
                          tagId: 5473,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Japanese filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Japanese filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 59,
                      value: "10640",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Bar",
                          tagId: 10640,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Bar filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Bar filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 56,
                      value: "10651",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Barbecue",
                          tagId: 10651,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Barbecue filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Barbecue filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 55,
                      value: "10653",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Sushi",
                          tagId: 10653,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Sushi filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Sushi filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 54,
                      value: "11744",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Arabic",
                          tagId: 11744,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Arabic filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Arabic filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 39,
                      value: "5086",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "French",
                          tagId: 5086,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove French filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply French filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 39,
                      value: "10668",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Grill",
                          tagId: 10668,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Grill filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Grill filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 35,
                      value: "10679",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Healthy",
                          tagId: 10679,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Healthy filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Healthy filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 31,
                      value: "10346",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Indian",
                          tagId: 10346,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Indian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Indian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 30,
                      value: "5379",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Chinese",
                          tagId: 5379,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Chinese filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Chinese filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 29,
                      value: "5110",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Mexican",
                          tagId: 5110,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Mexican filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Mexican filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 29,
                      value: "10345",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Steakhouse",
                          tagId: 10345,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Steakhouse filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Steakhouse filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 20,
                      value: "10660",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Thai",
                          tagId: 10660,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Thai filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Thai filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 20,
                      value: "10676",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Diner",
                          tagId: 10676,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Diner filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Diner filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 14,
                      value: "10663",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Turkish",
                          tagId: 10663,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Turkish filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Turkish filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 13,
                      value: "10664",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Greek",
                          tagId: 10664,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Greek filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Greek filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 12,
                      value: "10682",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Wine Bar",
                          tagId: 10682,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Wine Bar filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Wine Bar filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 12,
                      value: "10749",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "South American",
                          tagId: 10749,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove South American filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply South American filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 9,
                      value: "20076",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Southern-Italian",
                          tagId: 20076,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Southern-Italian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Southern-Italian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 8,
                      value: "10632",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "African",
                          tagId: 10632,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove African filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply African filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 8,
                      value: "10655",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Spanish",
                          tagId: 10655,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Spanish filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Spanish filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 8,
                      value: "10671",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Fusion",
                          tagId: 10671,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Fusion filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Fusion filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 7,
                      value: "10661",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Korean",
                          tagId: 10661,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Korean filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Korean filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 7,
                      value: "10669",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Contemporary",
                          tagId: 10669,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Contemporary filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Contemporary filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 7,
                      value: "10700",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Soups",
                          tagId: 10700,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Soups filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Soups filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 7,
                      value: "20075",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Central-Italian",
                          tagId: 20075,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Central-Italian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Central-Italian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 6,
                      value: "10639",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Latin",
                          tagId: 10639,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Latin filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Latin filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 6,
                      value: "10662",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "British",
                          tagId: 10662,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove British filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply British filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 6,
                      value: "10686",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Street Food",
                          tagId: 10686,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Street Food filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Street Food filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 6,
                      value: "21367",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Japanese Fusion",
                          tagId: 21367,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Japanese Fusion filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Japanese Fusion filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "10631",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Peruvian",
                          tagId: 10631,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Peruvian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Peruvian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "10633",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Moroccan",
                          tagId: 10633,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Moroccan filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Moroccan filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "10666",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Deli",
                          tagId: 10666,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Deli filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Deli filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "10695",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Szechuan",
                          tagId: 10695,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Szechuan filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Szechuan filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "10726",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Native American",
                          tagId: 10726,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Native American filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Native American filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "10746",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Central European",
                          tagId: 10746,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Central European filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Central European filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "20062",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Neapolitan",
                          tagId: 20062,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Neapolitan filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Neapolitan filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "20064",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Campania",
                          tagId: 20064,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Campania filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Campania filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "20069",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Sicilian",
                          tagId: 20069,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Sicilian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Sicilian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 4,
                      value: "10617",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Belgian",
                          tagId: 10617,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Belgian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Belgian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 4,
                      value: "10628",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Swiss",
                          tagId: 10628,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Swiss filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Swiss filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 4,
                      value: "10698",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Argentinean",
                          tagId: 10698,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Argentinean filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Argentinean filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 4,
                      value: "10752",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Shanghai",
                          tagId: 10752,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Shanghai filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Shanghai filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 4,
                      value: "20066",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Tuscan",
                          tagId: 20066,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Tuscan filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Tuscan filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 4,
                      value: "20074",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Northern-Italian",
                          tagId: 20074,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Northern-Italian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Northern-Italian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "10348",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Brazilian",
                          tagId: 10348,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Brazilian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Brazilian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "10634",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Southwestern",
                          tagId: 10634,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Southwestern filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Southwestern filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "10680",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Portuguese",
                          tagId: 10680,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Portuguese filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Portuguese filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "10692",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Cantonese",
                          tagId: 10692,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Cantonese filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Cantonese filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "10741",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Malaysian",
                          tagId: 10741,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Malaysian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Malaysian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "10742",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Eastern European",
                          tagId: 10742,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Eastern European filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Eastern European filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "10755",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Hong Kong",
                          tagId: 10755,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Hong Kong filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Hong Kong filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "10760",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Central American",
                          tagId: 10760,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Central American filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Central American filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "11739",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Central Asian",
                          tagId: 11739,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Central Asian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Central Asian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "20067",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Romana",
                          tagId: 20067,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Romana filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Romana filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "20068",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Lazio",
                          tagId: 20068,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Lazio filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Lazio filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "21355",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Beer restaurants",
                          tagId: 21355,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Beer restaurants filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Beer restaurants filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "10622",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Caribbean",
                          tagId: 10622,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Caribbean filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Caribbean filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "10675",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Vietnamese",
                          tagId: 10675,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Vietnamese filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Vietnamese filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "10681",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Australian",
                          tagId: 10681,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Australian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Australian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "10762",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Scandinavian",
                          tagId: 10762,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Scandinavian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Scandinavian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "20071",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Ligurian",
                          tagId: 20071,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Ligurian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Ligurian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "21350",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Medicinal foods",
                          tagId: 21350,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Medicinal foods filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Medicinal foods filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "21353",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Dining bars",
                          tagId: 21353,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Dining bars filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Dining bars filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10627",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Dutch",
                          tagId: 10627,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Dutch filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Dutch filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10636",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Filipino",
                          tagId: 10636,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Filipino filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Filipino filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10683",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Gastropub",
                          tagId: 10683,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Gastropub filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Gastropub filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10690",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Indonesian",
                          tagId: 10690,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Indonesian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Indonesian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10696",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Taiwanese",
                          tagId: 10696,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Taiwanese filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Taiwanese filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10699",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Canadian",
                          tagId: 10699,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Canadian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Canadian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10710",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Yunnan",
                          tagId: 10710,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Yunnan filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Yunnan filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10715",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Venezuelan",
                          tagId: 10715,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Venezuelan filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Venezuelan filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10721",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Burmese",
                          tagId: 10721,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Burmese filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Burmese filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10724",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Bahamian",
                          tagId: 10724,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Bahamian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Bahamian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10744",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Cuban",
                          tagId: 10744,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Cuban filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Cuban filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10753",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Swedish",
                          tagId: 10753,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Swedish filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Swedish filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10766",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Armenian",
                          tagId: 10766,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Armenian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Armenian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10772",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Hawaiian",
                          tagId: 10772,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Hawaiian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Hawaiian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10785",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Ethiopian",
                          tagId: 10785,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Ethiopian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Ethiopian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20070",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Lombard",
                          tagId: 20070,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Lombard filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Lombard filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20072",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Sardinian",
                          tagId: 20072,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Sardinian filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Sardinian filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                  ],
                },
                {
                  __typename: "AppPresentation_MultiValueFilter",
                  trackingKey:
                    '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_filterGroups_0_7","lid":294201,"fn":"dish","sn":"Attractions"}',
                  trackingTitle: "APSMultiValueFilter_dish",
                  title: "Dishes",
                  name: "dish",
                  surfaces: ["LIST", "MAP"],
                  tooltip: null,
                  values: [
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 126,
                      value: "16554",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Salad",
                          tagId: 16554,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Salad filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Salad filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 64,
                      value: "10678",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Pasta",
                          tagId: 10678,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Pasta filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Pasta filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 63,
                      value: "21239",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Pesto",
                          tagId: 21239,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Pesto filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Pesto filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 52,
                      value: "10907",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Burger",
                          tagId: 10907,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Burger filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Burger filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 52,
                      value: "10937",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Shrimp",
                          tagId: 10937,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Shrimp filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Shrimp filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 49,
                      value: "20752",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Beef",
                          tagId: 20752,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Beef filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Beef filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 49,
                      value: "21324",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Fish",
                          tagId: 21324,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Fish filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Fish filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 39,
                      value: "10647",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Sandwiches",
                          tagId: 10647,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Sandwiches filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Sandwiches filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 30,
                      value: "21174",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Lamb",
                          tagId: 21174,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Lamb filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Lamb filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 26,
                      value: "20547",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Salmon",
                          tagId: 20547,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Salmon filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Salmon filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 20,
                      value: "20185",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Kabobs",
                          tagId: 20185,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Kabobs filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Kabobs filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 20,
                      value: "20312",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Risotto",
                          tagId: 20312,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Risotto filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Risotto filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 15,
                      value: "10645",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Noodle",
                          tagId: 10645,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Noodle filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Noodle filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 15,
                      value: "21275",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Cakes",
                          tagId: 21275,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Cakes filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Cakes filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 14,
                      value: "9911",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Juice & Smoothies",
                          tagId: 9911,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Juice & Smoothies filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Juice & Smoothies filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 14,
                      value: "20532",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Hummus",
                          tagId: 20532,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Hummus filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Hummus filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 11,
                      value: "10899",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Falafel",
                          tagId: 10899,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Falafel filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Falafel filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 11,
                      value: "20181",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Curry",
                          tagId: 20181,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Curry filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Curry filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 11,
                      value: "21022",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Duck",
                          tagId: 21022,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Duck filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Duck filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 9,
                      value: "10936",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Shawarma",
                          tagId: 10936,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Shawarma filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Shawarma filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 8,
                      value: "10914",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Lasagne",
                          tagId: 10914,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Lasagne filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Lasagne filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 8,
                      value: "20027",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Calamari",
                          tagId: 20027,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Calamari filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Calamari filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 8,
                      value: "20314",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Tiramisu",
                          tagId: 20314,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Tiramisu filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Tiramisu filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 8,
                      value: "20699",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Prawns",
                          tagId: 20699,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Prawns filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Prawns filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 7,
                      value: "10885",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Cheesecake",
                          tagId: 10885,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Cheesecake filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Cheesecake filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 7,
                      value: "16555",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Pancakes",
                          tagId: 16555,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Pancakes filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Pancakes filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 7,
                      value: "20483",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Eggplant",
                          tagId: 20483,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Eggplant filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Eggplant filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 7,
                      value: "21320",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Sashimi",
                          tagId: 21320,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Sashimi filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Sashimi filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 6,
                      value: "10898",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Dumplings",
                          tagId: 10898,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Dumplings filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Dumplings filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 6,
                      value: "20552",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Tuna",
                          tagId: 20552,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Tuna filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Tuna filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "10923",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Pad Thai",
                          tagId: 10923,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Pad Thai filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Pad Thai filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "19955",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Wings",
                          tagId: 19955,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Wings filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Wings filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "20039",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Lamb chops",
                          tagId: 20039,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Lamb chops filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Lamb chops filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 5,
                      value: "20534",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Fattoush",
                          tagId: 20534,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Fattoush filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Fattoush filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 4,
                      value: "10774",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Fondue",
                          tagId: 10774,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Fondue filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Fondue filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 4,
                      value: "10942",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Tapas",
                          tagId: 10942,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Tapas filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Tapas filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 4,
                      value: "20711",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Octopus",
                          tagId: 20711,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Octopus filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Octopus filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 4,
                      value: "20740",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Fish Soup",
                          tagId: 20740,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Fish Soup filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Fish Soup filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "10685",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Chicken Wings",
                          tagId: 10685,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Chicken Wings filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Chicken Wings filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "10893",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Crab",
                          tagId: 10893,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Crab filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Crab filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "10896",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Dim Sum",
                          tagId: 10896,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Dim Sum filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Dim Sum filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "10906",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Halloumi",
                          tagId: 10906,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Halloumi filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Halloumi filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "10932",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Ribs",
                          tagId: 10932,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Ribs filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Ribs filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "11717",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Tempura",
                          tagId: 11717,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Tempura filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Tempura filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "20029",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Chili",
                          tagId: 20029,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Chili filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Chili filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "20730",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Toasts",
                          tagId: 20730,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Toasts filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Toasts filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 3,
                      value: "21285",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Fried rice",
                          tagId: 21285,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Fried rice filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Fried rice filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "10616",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Chowder",
                          tagId: 10616,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Chowder filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Chowder filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "10878",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Burrito",
                          tagId: 10878,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Burrito filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Burrito filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "10902",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "French Toast",
                          tagId: 10902,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove French Toast filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply French Toast filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "10915",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Lobster",
                          tagId: 10915,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Lobster filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Lobster filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "10921",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Omelette",
                          tagId: 10921,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Omelette filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Omelette filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "19954",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Tacos",
                          tagId: 19954,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Tacos filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Tacos filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "20034",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Fajitas",
                          tagId: 20034,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Fajitas filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Fajitas filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "20041",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Nachos",
                          tagId: 20041,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Nachos filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Nachos filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "20182",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Green Curry",
                          tagId: 20182,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Green Curry filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Green Curry filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "20188",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Tikka Masala",
                          tagId: 20188,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Tikka Masala filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Tikka Masala filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "20499",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Tataki",
                          tagId: 20499,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Tataki filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Tataki filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "20533",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Gelato",
                          tagId: 20533,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Gelato filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Gelato filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "20542",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Scallops",
                          tagId: 20542,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Scallops filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Scallops filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "20716",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Rice pudding",
                          tagId: 20716,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Rice pudding filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Rice pudding filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "20749",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Fava Beans",
                          tagId: 20749,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Fava Beans filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Fava Beans filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "21055",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Raclette",
                          tagId: 21055,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Raclette filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Raclette filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "21215",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Bruschette",
                          tagId: 21215,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Bruschette filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Bruschette filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "21293",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Cheese fondue",
                          tagId: 21293,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Cheese fondue filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Cheese fondue filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 2,
                      value: "21326",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Pork",
                          tagId: 21326,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Pork filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Pork filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "9899",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Ice Cream",
                          tagId: 9899,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Ice Cream filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Ice Cream filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10740",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Bagels",
                          tagId: 10740,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Bagels filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Bagels filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10883",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Ceviche",
                          tagId: 10883,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Ceviche filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Ceviche filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10884",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Cheeseburger",
                          tagId: 10884,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Cheeseburger filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Cheeseburger filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10900",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Filet Mignon",
                          tagId: 10900,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Filet Mignon filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Filet Mignon filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10901",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Fish & Chips",
                          tagId: 10901,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Fish & Chips filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Fish & Chips filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10905",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Gyros",
                          tagId: 10905,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Gyros filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Gyros filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10913",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Kung Pao Chicken",
                          tagId: 10913,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Kung Pao Chicken filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Kung Pao Chicken filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10917",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Mandarin Duck",
                          tagId: 10917,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Mandarin Duck filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Mandarin Duck filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10924",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Paella",
                          tagId: 10924,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Paella filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Paella filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10925",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Peking Duck",
                          tagId: 10925,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Peking Duck filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Peking Duck filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10931",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Pretzel",
                          tagId: 10931,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Pretzel filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Pretzel filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10938",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Souvlaki",
                          tagId: 10938,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Souvlaki filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Souvlaki filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10944",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Tortillas",
                          tagId: 10944,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Tortillas filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Tortillas filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "11721",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName:
                            "Udon & Soba (Wheat & Buckwheat Noodle)",
                          tagId: 11721,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string:
                          "Remove Udon & Soba (Wheat & Buckwheat Noodle) filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string:
                          "Apply Udon & Soba (Wheat & Buckwheat Noodle) filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "11738",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Bento (Lunch Box)",
                          tagId: 11738,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Bento (Lunch Box) filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Bento (Lunch Box) filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20032",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Cupcakes",
                          tagId: 20032,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Cupcakes filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Cupcakes filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20125",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Queso",
                          tagId: 20125,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Queso filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Queso filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20137",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Tres Leches",
                          tagId: 20137,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Tres Leches filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Tres Leches filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20159",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Salmon Salad",
                          tagId: 20159,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Salmon Salad filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Salmon Salad filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20179",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Alfredo",
                          tagId: 20179,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Alfredo filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Alfredo filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20191",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Couscous",
                          tagId: 20191,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Couscous filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Couscous filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20316",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Mussels",
                          tagId: 20316,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Mussels filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Mussels filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20317",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Crepes",
                          tagId: 20317,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Crepes filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Crepes filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20325",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Bolognese",
                          tagId: 20325,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Bolognese filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Bolognese filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20521",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Escalope",
                          tagId: 20521,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Escalope filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Escalope filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20535",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Baba Ghanoush",
                          tagId: 20535,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Baba Ghanoush filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Baba Ghanoush filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20556",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Clams",
                          tagId: 20556,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Clams filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Clams filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20697",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Foie gras",
                          tagId: 20697,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Foie gras filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Foie gras filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20703",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "French Fries",
                          tagId: 20703,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove French Fries filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply French Fries filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20733",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Bass",
                          tagId: 20733,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Bass filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Bass filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "20754",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Hamburgers",
                          tagId: 20754,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Hamburgers filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Hamburgers filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "21023",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Torte",
                          tagId: 21023,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Torte filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Torte filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "21209",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Paninis",
                          tagId: 21209,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Paninis filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Paninis filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                  ],
                },
                {
                  __typename: "AppPresentation_EnumeratedValueFilter",
                  trackingKey:
                    '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_filterGroups_0_8","lid":294201,"fn":"minRating","sn":"Attractions"}',
                  trackingTitle: "APSEnumeratedValueFilter_minRating",
                  name: "minRating",
                  surfaces: ["LIST", "MAP"],
                  title: "Traveler rating",
                  tooltip: null,
                  values: [
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 398,
                      value: "50",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_BubbleRatingFilterValue",
                        minimumRatingValue: 50,
                      },
                      selectedAccessibilityString: null,
                      unselectedAccessibilityString: null,
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1331,
                      value: "40",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_BubbleRatingFilterValue",
                        minimumRatingValue: 40,
                      },
                      selectedAccessibilityString: null,
                      unselectedAccessibilityString: null,
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1702,
                      value: "30",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_BubbleRatingFilterValue",
                        minimumRatingValue: 30,
                      },
                      selectedAccessibilityString: null,
                      unselectedAccessibilityString: null,
                      tooltip: null,
                    },
                  ],
                },
                {
                  __typename: "AppPresentation_MultiValueFilter",
                  trackingKey:
                    '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_filterGroups_0_9","lid":294201,"fn":"diet","sn":"Attractions"}',
                  trackingTitle: "APSMultiValueFilter_diet",
                  title: "Dietary Restrictions",
                  name: "diet",
                  surfaces: ["LIST", "MAP"],
                  tooltip: null,
                  values: [
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 251,
                      value: "10665",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Vegetarian Friendly",
                          tagId: 10665,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Vegetarian Friendly filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Vegetarian Friendly filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 155,
                      value: "10751",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Halal",
                          tagId: 10751,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Halal filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Halal filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 154,
                      value: "10697",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Vegan Options",
                          tagId: 10697,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Vegan Options filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Vegan Options filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 69,
                      value: "10992",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Gluten Free Options",
                          tagId: 10992,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Gluten Free Options filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Gluten Free Options filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 1,
                      value: "10768",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Kosher",
                          tagId: 10768,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Kosher filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Kosher filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                  ],
                },
                {
                  __typename: "AppPresentation_MultiValueFilter",
                  trackingKey:
                    '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_filterGroups_0_10","lid":294201,"fn":"style","sn":"Attractions"}',
                  trackingTitle: "APSMultiValueFilter_style",
                  title: "Good for",
                  name: "style",
                  surfaces: ["LIST", "MAP"],
                  tooltip: null,
                  values: [
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 327,
                      value: "10604",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Families with children",
                          tagId: 10604,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Families with children filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Families with children filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 211,
                      value: "10609",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Large groups",
                          tagId: 10609,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Large groups filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Large groups filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 170,
                      value: "10605",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Business meetings",
                          tagId: 10605,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Business meetings filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Business meetings filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 168,
                      value: "10614",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Romantic",
                          tagId: 10614,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Romantic filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Romantic filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 131,
                      value: "11777",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Kids",
                          tagId: 11777,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Kids filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Kids filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 115,
                      value: "10607",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Special occasions",
                          tagId: 10607,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Special occasions filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Special occasions filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 89,
                      value: "10608",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Bar scene",
                          tagId: 10608,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Bar scene filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Bar scene filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 51,
                      value: "10613",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Local cuisine",
                          tagId: 10613,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Local cuisine filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Local cuisine filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 45,
                      value: "10610",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Scenic view",
                          tagId: 10610,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Scenic view filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Scenic view filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 17,
                      value: "16550",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Hidden Gems",
                          tagId: 16550,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Hidden Gems filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Hidden Gems filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                    {
                      __typename: "AppPresentation_EnumeratedValueWithCount",
                      count: 16,
                      value: "12504",
                      isSelected: false,
                      object: {
                        __typename: "AppPresentation_TagFilterValue",
                        tag: {
                          __typename: "Tag_TagInformationV2",
                          localizedName: "Hot New Restaurants",
                          tagId: 12504,
                        },
                      },
                      selectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Remove Hot New Restaurants filter",
                        debugValueKey: null,
                      },
                      unselectedAccessibilityString: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Apply Hot New Restaurants filter ",
                        debugValueKey: null,
                      },
                      tooltip: null,
                    },
                  ],
                },
              ],
              trackingKey:
                '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_filterGroups_0","fn":"Filters","sn":"Attractions"}',
              trackingTitle: "RestaurantListFilterGroup",
            },
          ],
        },
        availableSorts: [
          {
            __typename: "AppPresentation_Sort",
            isAscending: false,
            isSelected: true,
            name: "POPULARITY",
            surfaces: ["LIST"],
            trackingKey:
              '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_sorts_0","lid":294201,"sortn":"POPULARITY","sn":"Attractions"}',
            trackingTitle: "WrapperSortOption_POPULARITY",
            title: {
              __typename: "AppPresentation_LocalizedString",
              string: "Traveler ranking",
              debugValueKey: null,
            },
            tooltipV2: null,
          },
          {
            __typename: "AppPresentation_Sort",
            isAscending: false,
            isSelected: false,
            name: "RELEVANCE",
            surfaces: ["LIST"],
            trackingKey:
              '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_sorts_1","lid":294201,"sortn":"RELEVANCE","sn":"Attractions"}',
            trackingTitle: "WrapperSortOption_RELEVANCE",
            title: {
              __typename: "AppPresentation_LocalizedString",
              string: "Relevance",
              debugValueKey: null,
            },
            tooltipV2: null,
          },
        ],
        datePickerConfig: null,
        sections: [
          {
            __typename: "AppPresentation_SortDisclaimerSection",
            tooltip: {
              __typename: "AppPresentation_HtmlStringWithTooltip",
              text: {
                __typename: "AppPresentation_HtmlString",
                htmlString:
                  '4,000+ places sorted by <span class="underline">traveler ranking</span>',
              },
              tooltip: {
                __typename: "AppPresentation_Tooltip",
                icon: "info",
                labelText: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Traveler ranking",
                  debugValueKey: null,
                },
                popUpText: {
                  __typename: "AppPresentation_LocalizedString",
                  string:
                    "Highest rated restaurants on Tripadvisor, based on reviews.",
                  debugValueKey: null,
                },
                dialog: {
                  __typename: "AppPresentation_BorderlessButtonDialog",
                  dialogType: "BorderlessButtonDialog",
                  title: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Traveler ranking",
                    debugValueKey: null,
                  },
                  content: {
                    __typename: "AppPresentation_HtmlString",
                    htmlString:
                      "Highest rated restaurants on Tripadvisor, based on reviews.",
                  },
                  buttonV2: null,
                },
              },
            },
            groupName: {
              __typename: "AppPresentation_LocalizedString",
              string: "Filters",
              debugValueKey: null,
            },
            clusterId: "EAT_STATIC",
            sectionType: "SortDisclaimerSection",
            stableDiffingType: "RestaurantSortDisclaimerSection_EAT_STATIC",
            trackingKey:
              '{"dt":"RESULT_SUMMARY","ik":"41966518-0721-4460-83e3-72b1d77d6605_0","sn":"Attractions"}',
            trackingTitle: "RestaurantSortDisclaimerSection_EAT_STATIC",
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_b21df75e-d968-427b-9a77-cac0bdf633d1_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":1606,"ik":"41966518-0721-4460-83e3-72b1d77d6605_1","ctt":"LOCATION","pt":"restaurant","lid":2602748,"pir":1,"mid":358616154,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_b21df75e-d968-427b-9a77-cac0bdf633d1_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":1606,"ik":"41966518-0721-4460-83e3-72b1d77d6605_1","ctt":"LOCATION","pt":"restaurant","lid":2602748,"pir":1,"mid":358616154,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_b21df75e-d968-427b-9a77-cac0bdf633d1",
              stableDiffingType:
                "RestaurantListCard_restaurant_b21df75e-d968-427b-9a77-cac0bdf633d1",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "1. The Blue Restaurant & Grill",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Mediterranean • Vegetarian Friendly • Vegan Options",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.menumodo.com/app.php/viewer/outlet/6788/23676/only?lang=en&tags=h",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for The Blue Restaurant & Grill",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "2602748",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 2048,
                  maxWidth: 3072,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/60/0c/5a/the-blue-restaurant-6.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "1,606",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=b21df75e-d968-427b-9a77-cac0bdf633d1",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=b21df75e-d968-427b-9a77-cac0bdf633d1",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "b21df75e-d968-427b-9a77-cac0bdf633d1",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for The Blue Restaurant & Grill",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_879c7b8e-03bf-4bf7-a3a4-df39c79c40e1_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":1654,"ik":"41966518-0721-4460-83e3-72b1d77d6605_2","ctt":"LOCATION","pt":"restaurant","lid":17782629,"pir":2,"mid":474311744,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_879c7b8e-03bf-4bf7-a3a4-df39c79c40e1_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":1654,"ik":"41966518-0721-4460-83e3-72b1d77d6605_2","ctt":"LOCATION","pt":"restaurant","lid":17782629,"pir":2,"mid":474311744,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_879c7b8e-03bf-4bf7-a3a4-df39c79c40e1",
              stableDiffingType:
                "RestaurantListCard_restaurant_879c7b8e-03bf-4bf7-a3a4-df39c79c40e1",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "2. Beeja",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Mediterranean • Middle Eastern • Egyptian",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: null,
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "17782629",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 4032,
                  maxWidth: 3024,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/45/6c/40/beeja.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "1,654",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=879c7b8e-03bf-4bf7-a3a4-df39c79c40e1",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=879c7b8e-03bf-4bf7-a3a4-df39c79c40e1",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "879c7b8e-03bf-4bf7-a3a4-df39c79c40e1",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Beeja",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_1",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_8221169a-167d-4dfd-b3fb-991259ba231e_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":771,"ik":"41966518-0721-4460-83e3-72b1d77d6605_3","ctt":"LOCATION","pt":"restaurant","lid":2002786,"pir":3,"mid":384085790,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_8221169a-167d-4dfd-b3fb-991259ba231e_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":771,"ik":"41966518-0721-4460-83e3-72b1d77d6605_3","ctt":"LOCATION","pt":"restaurant","lid":2002786,"pir":3,"mid":384085790,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_8221169a-167d-4dfd-b3fb-991259ba231e",
              stableDiffingType:
                "RestaurantListCard_restaurant_8221169a-167d-4dfd-b3fb-991259ba231e",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "3. Saigon Restaurant & Lounge",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$$$ • Japanese • Sushi • Asian",
              },
              secondaryInfo: null,
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://qr.mydigimenu.com/33938477-57f4-4ad7-8639-173f47f72bd3",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Saigon Restaurant & Lounge",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: {
                  __typename: "AppPresentation_TertiaryCommerceButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.tripadvisor.com/Commerce?p=OpenTable&src=232198719&geo=2002786&from=Restaurants&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=45582&bucket=979641&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=245915723&managed=false&capped=false&gosox=NMlXAP2pKbHpJBdd_T0yLrnSeCIMSZfUNUDKekvG_sbKwu05_rxI0xAbGfc7NUidNGi9I6nuBPmXmunT2F7Y2UhizuR4fqLibF6xRSuwBIc&cs=19fb561de2df100bec6b36f1e75b14df7",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Reserve",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string:
                        "Make a reservation at Saigon Restaurant & Lounge",
                      debugValueKey: null,
                    },
                    trackingContext: "server_reserve_1",
                  },
                },
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "2002786",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 2559,
                  maxWidth: 4166,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e4/af/1e/saigon-restaurant.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "771",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=8221169a-167d-4dfd-b3fb-991259ba231e",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=8221169a-167d-4dfd-b3fb-991259ba231e",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "8221169a-167d-4dfd-b3fb-991259ba231e",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Saigon Restaurant & Lounge",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_2",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_d44b9183-38dd-4873-b618-39aa0f05c3d1_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":554,"ik":"41966518-0721-4460-83e3-72b1d77d6605_4","ctt":"LOCATION","pt":"restaurant","lid":13567060,"pir":4,"mid":498145751,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_d44b9183-38dd-4873-b618-39aa0f05c3d1_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":554,"ik":"41966518-0721-4460-83e3-72b1d77d6605_4","ctt":"LOCATION","pt":"restaurant","lid":13567060,"pir":4,"mid":498145751,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_d44b9183-38dd-4873-b618-39aa0f05c3d1",
              stableDiffingType:
                "RestaurantListCard_restaurant_d44b9183-38dd-4873-b618-39aa0f05c3d1",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "4. Lobby Lounge",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Bar • International • Egyptian",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "http://www.morecravings.com/venues/lobby-lounge-4",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Lobby Lounge",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "13567060",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 760,
                  maxWidth: 1125,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/b1/19/d7/relaxed-yet-elegant-seating.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "554",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=d44b9183-38dd-4873-b618-39aa0f05c3d1",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=d44b9183-38dd-4873-b618-39aa0f05c3d1",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "d44b9183-38dd-4873-b618-39aa0f05c3d1",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Lobby Lounge",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_3",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_AdPlaceholderNative",
            trackingTitle: "AdPlaceholder_NATIVE",
            trackingKey:
              '{"adt":"NATIVE","ik":"41966518-0721-4460-83e3-72b1d77d6605_5","sn":"Attractions"}',
            stableDiffingType: "AdPlaceholder_NATIVE",
            clusterId: "AD_PLACEHOLDER_NATIVE",
            adUnitId: "/5349/ta.ta.com.s/af.egypt.cairo",
            adSizes: ["FLUID", "_300x250"],
            targetingParams: [
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "country",
                values: ["294200"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "dest",
                values: ["casino"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "detail",
                values: ["0"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "geo",
                values: ["294201"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "geo_ctx",
                values: ["12028", "12029", "12077", "21827", "21831", "21833"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "hname",
                values: ["Cairo"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "loctype",
                values: ["attractions"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "PageType",
                values: ["Attractions"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "platform",
                values: ["mobile_app"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "rd",
                values: ["com"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "region",
                values: ["3688720"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "pos",
                values: ["inline1"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "fluidType",
                values: ["mobile"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "correlator",
                values: ["4182787702391728"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "sess",
                values: ["7DFD24BE5F6E490AB442F694CBC47C4F"],
              },
            ],
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_AD_PLACEHOLDER_NATIVE",
            spacing: "spacing-05",
            clusterId: "AD_PLACEHOLDER_NATIVE",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_b0bbbdfb-df54-43c2-a1fc-c707fb837381_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":813,"ik":"41966518-0721-4460-83e3-72b1d77d6605_6","ctt":"LOCATION","pt":"restaurant","lid":8734329,"pir":5,"mid":304808994,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_b0bbbdfb-df54-43c2-a1fc-c707fb837381_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":813,"ik":"41966518-0721-4460-83e3-72b1d77d6605_6","ctt":"LOCATION","pt":"restaurant","lid":8734329,"pir":5,"mid":304808994,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_b0bbbdfb-df54-43c2-a1fc-c707fb837381",
              stableDiffingType:
                "RestaurantListCard_restaurant_b0bbbdfb-df54-43c2-a1fc-c707fb837381",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "5. Culina",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • International • Mediterranean • European",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl: "http://www.morecravings.com/venues/culina",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Culina",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "8734329",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 787,
                  maxWidth: 1183,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/2b/04/22/getlstd-property-photo.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "813",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=b0bbbdfb-df54-43c2-a1fc-c707fb837381",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=b0bbbdfb-df54-43c2-a1fc-c707fb837381",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "b0bbbdfb-df54-43c2-a1fc-c707fb837381",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Culina",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_4",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_c1adb453-16ac-46af-b835-3eea38be8772_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":774,"ik":"41966518-0721-4460-83e3-72b1d77d6605_7","ctt":"LOCATION","pt":"restaurant","lid":3333673,"pir":6,"mid":427378157,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_c1adb453-16ac-46af-b835-3eea38be8772_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "BEST_OF_BEST",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":774,"ik":"41966518-0721-4460-83e3-72b1d77d6605_7","ctt":"LOCATION","pt":"restaurant","lid":3333673,"pir":6,"mid":427378157,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_c1adb453-16ac-46af-b835-3eea38be8772",
              stableDiffingType:
                "RestaurantListCard_restaurant_c1adb453-16ac-46af-b835-3eea38be8772",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "6. Noble House",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$$$ • Chinese • Japanese • Seafood",
              },
              secondaryInfo: null,
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl: "https://qrco.de/bbdbWp",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Noble House",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "3333673",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 2250,
                  maxWidth: 3000,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/79/45/ed/noble-house-restaurant.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "774",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=c1adb453-16ac-46af-b835-3eea38be8772",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=c1adb453-16ac-46af-b835-3eea38be8772",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "c1adb453-16ac-46af-b835-3eea38be8772",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Noble House",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_5",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_133e6aa0-27b1-4e01-a3b2-b777b8fd1b0f_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":1595,"ik":"41966518-0721-4460-83e3-72b1d77d6605_8","ctt":"LOCATION","pt":"restaurant","lid":2715802,"pir":7,"mid":246330697,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_133e6aa0-27b1-4e01-a3b2-b777b8fd1b0f_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "BEST_OF_BEST",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":1595,"ik":"41966518-0721-4460-83e3-72b1d77d6605_8","ctt":"LOCATION","pt":"restaurant","lid":2715802,"pir":7,"mid":246330697,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_133e6aa0-27b1-4e01-a3b2-b777b8fd1b0f",
              stableDiffingType:
                "RestaurantListCard_restaurant_133e6aa0-27b1-4e01-a3b2-b777b8fd1b0f",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "7. Al Khal Egyptian Restaurant",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$$$ • Barbecue • Middle Eastern • Egyptian",
              },
              secondaryInfo: null,
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl: "https://menu.citystarshotels.com/al-khal/",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Al Khal Egyptian Restaurant",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: {
                  __typename: "AppPresentation_TertiaryCommerceButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.tripadvisor.com/Commerce?p=OpenTable&src=232175307&geo=2715802&from=Restaurants&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=45582&bucket=979641&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=245915723&managed=false&capped=false&gosox=NMlXAP2pKbHpJBdd_T0yLrnSeCIMSZfUNUDKekvG_sbKwu05_rxI0xAbGfc7NUidNGi9I6nuBPmXmunT2F7Y2Ra28neaXMOwB-Fiq2afzoU&cs=188b8940eff1f83541b36227b291720a4",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Reserve",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string:
                        "Make a reservation at Al Khal Egyptian Restaurant",
                      debugValueKey: null,
                    },
                    trackingContext: "server_reserve_1",
                  },
                },
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "2715802",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 641,
                  maxWidth: 960,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ae/b5/49/al-khal.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "1,595",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=133e6aa0-27b1-4e01-a3b2-b777b8fd1b0f",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=133e6aa0-27b1-4e01-a3b2-b777b8fd1b0f",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "133e6aa0-27b1-4e01-a3b2-b777b8fd1b0f",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Al Khal Egyptian Restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_6",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_6361f670-3d5f-432c-8937-0f76883753f0_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":1279,"ik":"41966518-0721-4460-83e3-72b1d77d6605_9","ctt":"LOCATION","pt":"restaurant","lid":2165744,"pir":8,"mid":412389958,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_6361f670-3d5f-432c-8937-0f76883753f0_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":1279,"ik":"41966518-0721-4460-83e3-72b1d77d6605_9","ctt":"LOCATION","pt":"restaurant","lid":2165744,"pir":8,"mid":412389958,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_6361f670-3d5f-432c-8937-0f76883753f0",
              stableDiffingType:
                "RestaurantListCard_restaurant_6361f670-3d5f-432c-8937-0f76883753f0",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "8. Shogun Japanese Restaurant",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$$$ • Japanese • Sushi • Asian",
              },
              secondaryInfo: null,
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: null,
                firstCommerceButton: {
                  __typename: "AppPresentation_TertiaryCommerceButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.tripadvisor.com/Commerce?p=OpenTable&src=232185450&geo=2165744&from=Restaurants&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=45582&bucket=979641&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=245915723&managed=false&capped=false&gosox=NMlXAP2pKbHpJBdd_T0yLrnSeCIMSZfUNUDKekvG_sbKwu05_rxI0xAbGfc7NUidNGi9I6nuBPmXmunT2F7Y2RY1VoO0yFOd_r8FEKHeQxc&cs=173855688a4061f5a27c038b2a412cfe8",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Reserve",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string:
                        "Make a reservation at Shogun Japanese Restaurant",
                      debugValueKey: null,
                    },
                    trackingContext: "server_reserve_1",
                  },
                },
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "2165744",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 5304,
                  maxWidth: 7952,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/94/92/46/shogun-aquarium.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "1,279",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=6361f670-3d5f-432c-8937-0f76883753f0",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=6361f670-3d5f-432c-8937-0f76883753f0",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "6361f670-3d5f-432c-8937-0f76883753f0",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Shogun Japanese Restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_7",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_857450ee-aa02-459f-9b3a-d5f192e79c09_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":1071,"ik":"41966518-0721-4460-83e3-72b1d77d6605_10","ctt":"LOCATION","pt":"restaurant","lid":2326095,"pir":9,"mid":358417772,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_857450ee-aa02-459f-9b3a-d5f192e79c09_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":1071,"ik":"41966518-0721-4460-83e3-72b1d77d6605_10","ctt":"LOCATION","pt":"restaurant","lid":2326095,"pir":9,"mid":358417772,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_857450ee-aa02-459f-9b3a-d5f192e79c09",
              stableDiffingType:
                "RestaurantListCard_restaurant_857450ee-aa02-459f-9b3a-d5f192e79c09",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "9. Osmanly Restaurant",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$$$ • Mediterranean • Barbecue • Turkish",
              },
              secondaryInfo: null,
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.menumodo.com/app.php/viewer/outlet/6787/23464/only?lang=en&tags=h",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Osmanly Restaurant",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "2326095",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 2048,
                  maxWidth: 3072,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5d/05/6c/osmanly-restaurant-1.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "1,071",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=857450ee-aa02-459f-9b3a-d5f192e79c09",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=857450ee-aa02-459f-9b3a-d5f192e79c09",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "857450ee-aa02-459f-9b3a-d5f192e79c09",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Osmanly Restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_8",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_8ae8002b-19e3-4ec3-91fb-39a16adeaf14_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":602,"ik":"41966518-0721-4460-83e3-72b1d77d6605_11","ctt":"LOCATION","pt":"restaurant","lid":21351187,"pir":10,"mid":473482218,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_8ae8002b-19e3-4ec3-91fb-39a16adeaf14_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":602,"ik":"41966518-0721-4460-83e3-72b1d77d6605_11","ctt":"LOCATION","pt":"restaurant","lid":21351187,"pir":10,"mid":473482218,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_8ae8002b-19e3-4ec3-91fb-39a16adeaf14",
              stableDiffingType:
                "RestaurantListCard_restaurant_8ae8002b-19e3-4ec3-91fb-39a16adeaf14",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "10. Maat",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Italian • International • Mediterranean",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: null,
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "21351187",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 960,
                  maxWidth: 1280,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/38/c3/ea/maat.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "602",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=8ae8002b-19e3-4ec3-91fb-39a16adeaf14",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=8ae8002b-19e3-4ec3-91fb-39a16adeaf14",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "8ae8002b-19e3-4ec3-91fb-39a16adeaf14",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Maat",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_9",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_AdPlaceholderNative",
            trackingTitle: "AdPlaceholder_NATIVE_1",
            trackingKey:
              '{"adt":"NATIVE","ik":"41966518-0721-4460-83e3-72b1d77d6605_12","sn":"Attractions"}',
            stableDiffingType: "AdPlaceholder_NATIVE_1",
            clusterId: "AD_PLACEHOLDER_NATIVE",
            adUnitId: "/5349/ta.ta.com.s/af.egypt.cairo",
            adSizes: ["FLUID", "_300x250"],
            targetingParams: [
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "country",
                values: ["294200"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "dest",
                values: ["casino"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "detail",
                values: ["0"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "geo",
                values: ["294201"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "geo_ctx",
                values: ["12028", "12029", "12077", "21827", "21831", "21833"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "hname",
                values: ["Cairo"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "loctype",
                values: ["attractions"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "PageType",
                values: ["Attractions"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "platform",
                values: ["mobile_app"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "rd",
                values: ["com"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "region",
                values: ["3688720"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "pos",
                values: ["inline2"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "fluidType",
                values: ["mobile"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "correlator",
                values: ["4182787702391728"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "sess",
                values: ["7DFD24BE5F6E490AB442F694CBC47C4F"],
              },
            ],
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_AD_PLACEHOLDER_NATIVE_1",
            spacing: "spacing-05",
            clusterId: "AD_PLACEHOLDER_NATIVE",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_790b7712-51fe-477b-bc81-df1281f83343_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":463,"ik":"41966518-0721-4460-83e3-72b1d77d6605_13","ctt":"LOCATION","pt":"restaurant","lid":3333665,"pir":13,"mid":378026720,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_790b7712-51fe-477b-bc81-df1281f83343_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":463,"ik":"41966518-0721-4460-83e3-72b1d77d6605_13","ctt":"LOCATION","pt":"restaurant","lid":3333665,"pir":13,"mid":378026720,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_790b7712-51fe-477b-bc81-df1281f83343",
              stableDiffingType:
                "RestaurantListCard_restaurant_790b7712-51fe-477b-bc81-df1281f83343",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "11. Raj",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$$$ • Indian • Vegetarian Friendly • Vegan Options",
              },
              secondaryInfo: null,
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www3.hilton.com/resources/media/hi/CAIHEHI/en_US/pdf/en_CAIHEHI_Raj_Menu_Aug_2019.pdf",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Raj",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "3333665",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 855,
                  maxWidth: 1280,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/88/3a/e0/renowned-biryani.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "463",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=790b7712-51fe-477b-bc81-df1281f83343",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=790b7712-51fe-477b-bc81-df1281f83343",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "790b7712-51fe-477b-bc81-df1281f83343",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Raj",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_10",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_031d9811-59c4-4428-99e0-bab58ffb0866_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":598,"ik":"41966518-0721-4460-83e3-72b1d77d6605_14","ctt":"LOCATION","pt":"restaurant","lid":19655638,"pir":14,"mid":440653979,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_031d9811-59c4-4428-99e0-bab58ffb0866_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":598,"ik":"41966518-0721-4460-83e3-72b1d77d6605_14","ctt":"LOCATION","pt":"restaurant","lid":19655638,"pir":14,"mid":440653979,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_031d9811-59c4-4428-99e0-bab58ffb0866",
              stableDiffingType:
                "RestaurantListCard_restaurant_031d9811-59c4-4428-99e0-bab58ffb0866",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "12. Solis Restaurant",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Bar • Mediterranean • Healthy",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: null,
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "19655638",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 3963,
                  maxWidth: 5937,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/43/d8/9b/solis-restaurant.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "598",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=031d9811-59c4-4428-99e0-bab58ffb0866",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=031d9811-59c4-4428-99e0-bab58ffb0866",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "031d9811-59c4-4428-99e0-bab58ffb0866",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Solis Restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_11",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_7be8964c-b0cc-415a-b5a8-cfea803fc46b_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":309,"ik":"41966518-0721-4460-83e3-72b1d77d6605_15","ctt":"LOCATION","pt":"restaurant","lid":14774406,"pir":12,"mid":433593528,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_7be8964c-b0cc-415a-b5a8-cfea803fc46b_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":309,"ik":"41966518-0721-4460-83e3-72b1d77d6605_15","ctt":"LOCATION","pt":"restaurant","lid":14774406,"pir":12,"mid":433593528,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_7be8964c-b0cc-415a-b5a8-cfea803fc46b",
              stableDiffingType:
                "RestaurantListCard_restaurant_7be8964c-b0cc-415a-b5a8-cfea803fc46b",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "13. Scores Sports Bar & Restaurant",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • American • Bar • International",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: null,
                firstCommerceButton: {
                  __typename: "AppPresentation_TertiaryCommerceButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.tripadvisor.com/Commerce?p=OpenTable&src=232181052&geo=14774406&from=Restaurants&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=45582&bucket=979641&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=245915723&managed=false&capped=false&gosox=NMlXAP2pKbHpJBdd_T0yLrnSeCIMSZfUNUDKekvG_sbKwu05_rxI0xAbGfc7NUidNGi9I6nuBPmXmunT2F7Y2UdgBYF2tEolwqSAlDgDbDk&cs=1ab4708eade834ac6cbcc512b9352ef73",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Reserve",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string:
                        "Make a reservation at Scores Sports Bar & Restaurant",
                      debugValueKey: null,
                    },
                    trackingContext: "server_reserve_1",
                  },
                },
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "14774406",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 2666,
                  maxWidth: 4000,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/d8/1c/b8/scores-bar-upper-level.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "309",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=7be8964c-b0cc-415a-b5a8-cfea803fc46b",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=7be8964c-b0cc-415a-b5a8-cfea803fc46b",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "7be8964c-b0cc-415a-b5a8-cfea803fc46b",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Scores Sports Bar & Restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_12",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_bbcdbc86-c246-49c4-b5be-2982fd35ad7b_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":1440,"ik":"41966518-0721-4460-83e3-72b1d77d6605_16","ctt":"LOCATION","pt":"restaurant","lid":15656334,"pir":11,"mid":379504505,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_bbcdbc86-c246-49c4-b5be-2982fd35ad7b_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":1440,"ik":"41966518-0721-4460-83e3-72b1d77d6605_16","ctt":"LOCATION","pt":"restaurant","lid":15656334,"pir":11,"mid":379504505,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_bbcdbc86-c246-49c4-b5be-2982fd35ad7b",
              stableDiffingType:
                "RestaurantListCard_restaurant_bbcdbc86-c246-49c4-b5be-2982fd35ad7b",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "14. Nişantaşi",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Mediterranean • Barbecue • Turkish",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl: "https://www.nisantasi.com.eg/menu",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Nişantaşi",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: {
                  __typename: "AppPresentation_TertiaryCommerceButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.tripadvisor.com/Commerce?p=Restaurants_SevenRooms&src=183966105&geo=15656334&from=Restaurants&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=29025&bucket=870813&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=245915723&managed=false&capped=false&gosox=E4dS6BmBGdrr2qeEMfyM4Ykh7g7kZZMQtwvX1r7-bZn0SG8wi-cOieoDR1eMjOtRNGi9I6nuBPmXmunT2F7Y2cLXimsUI01T2PCrQb7Eu3s&cs=1bb9e44b9fb56111511d9ec4a6d223cb5",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Reserve",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Make a reservation at Nişantaşi",
                      debugValueKey: null,
                    },
                    trackingContext: "server_reserve_1",
                  },
                },
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "15656334",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1139,
                  maxWidth: 1716,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9e/c7/79/testi-kebab-tavuk-jarra.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "1,440",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=bbcdbc86-c246-49c4-b5be-2982fd35ad7b",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=bbcdbc86-c246-49c4-b5be-2982fd35ad7b",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "bbcdbc86-c246-49c4-b5be-2982fd35ad7b",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Nişantaşi",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_13",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_45ca4ef0-0a81-4373-a777-9b7e3f24e9bd_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":1902,"ik":"41966518-0721-4460-83e3-72b1d77d6605_17","ctt":"LOCATION","pt":"restaurant","lid":2619464,"pir":15,"mid":412385695,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_45ca4ef0-0a81-4373-a777-9b7e3f24e9bd_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":1902,"ik":"41966518-0721-4460-83e3-72b1d77d6605_17","ctt":"LOCATION","pt":"restaurant","lid":2619464,"pir":15,"mid":412385695,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_45ca4ef0-0a81-4373-a777-9b7e3f24e9bd",
              stableDiffingType:
                "RestaurantListCard_restaurant_45ca4ef0-0a81-4373-a777-9b7e3f24e9bd",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "15. Fayruz Lebanese Restaurant",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$$$ • Lebanese • Mediterranean • Healthy",
              },
              secondaryInfo: null,
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: null,
                firstCommerceButton: {
                  __typename: "AppPresentation_TertiaryCommerceButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.tripadvisor.com/Commerce?p=OpenTable&src=232195412&geo=2619464&from=Restaurants&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=45582&bucket=979641&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=245915723&managed=false&capped=false&gosox=NMlXAP2pKbHpJBdd_T0yLrnSeCIMSZfUNUDKekvG_sbKwu05_rxI0xAbGfc7NUidNGi9I6nuBPmXmunT2F7Y2XGu3T7KEmwVgXX-m9Hlsoo&cs=177f844c7f2f3e0a97aecfe5a2692ece9",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Reserve",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string:
                        "Make a reservation at Fayruz Lebanese Restaurant",
                      debugValueKey: null,
                    },
                    trackingContext: "server_reserve_1",
                  },
                },
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "2619464",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 5304,
                  maxWidth: 7952,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/94/81/9f/kraides-mashwi-jumbo.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "1,902",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=45ca4ef0-0a81-4373-a777-9b7e3f24e9bd",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=45ca4ef0-0a81-4373-a777-9b7e3f24e9bd",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "45ca4ef0-0a81-4373-a777-9b7e3f24e9bd",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Fayruz Lebanese Restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_14",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_a118b305-f372-40d6-9895-a677a4b35766_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":1307,"ik":"41966518-0721-4460-83e3-72b1d77d6605_18","ctt":"LOCATION","pt":"restaurant","lid":11768815,"pir":16,"mid":312368819,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_a118b305-f372-40d6-9895-a677a4b35766_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":1307,"ik":"41966518-0721-4460-83e3-72b1d77d6605_18","ctt":"LOCATION","pt":"restaurant","lid":11768815,"pir":16,"mid":312368819,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_a118b305-f372-40d6-9895-a677a4b35766",
              stableDiffingType:
                "RestaurantListCard_restaurant_a118b305-f372-40d6-9895-a677a4b35766",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "16. Vivo - The Nile Ritz-Carlton",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$$$ • Italian • Mediterranean • European",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl: "https://www.morecravings.com/menus/539",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Vivo - The Nile Ritz-Carlton",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "11768815",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1333,
                  maxWidth: 2000,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/9e/5e/b3/rustic-and-contemporary.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "1,307",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=a118b305-f372-40d6-9895-a677a4b35766",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=a118b305-f372-40d6-9895-a677a4b35766",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "a118b305-f372-40d6-9895-a677a4b35766",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Vivo - The Nile Ritz-Carlton",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_15",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_AdPlaceholderNative",
            trackingTitle: "AdPlaceholder_NATIVE_2",
            trackingKey:
              '{"adt":"NATIVE","ik":"41966518-0721-4460-83e3-72b1d77d6605_19","sn":"Attractions"}',
            stableDiffingType: "AdPlaceholder_NATIVE_2",
            clusterId: "AD_PLACEHOLDER_NATIVE",
            adUnitId: "/5349/ta.ta.com.s/af.egypt.cairo",
            adSizes: ["FLUID", "_300x250"],
            targetingParams: [
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "country",
                values: ["294200"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "dest",
                values: ["casino"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "detail",
                values: ["0"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "geo",
                values: ["294201"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "geo_ctx",
                values: ["12028", "12029", "12077", "21827", "21831", "21833"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "hname",
                values: ["Cairo"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "loctype",
                values: ["attractions"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "PageType",
                values: ["Attractions"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "platform",
                values: ["mobile_app"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "rd",
                values: ["com"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "region",
                values: ["3688720"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "pos",
                values: ["inline3"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "fluidType",
                values: ["mobile"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "correlator",
                values: ["4182787702391728"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "sess",
                values: ["7DFD24BE5F6E490AB442F694CBC47C4F"],
              },
            ],
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_AD_PLACEHOLDER_NATIVE_2",
            spacing: "spacing-05",
            clusterId: "AD_PLACEHOLDER_NATIVE",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_8a345524-35e7-40f5-80ee-6339a41db1c1_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":196,"ik":"41966518-0721-4460-83e3-72b1d77d6605_20","ctt":"LOCATION","pt":"restaurant","lid":23414573,"pir":17,"mid":584430906,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_8a345524-35e7-40f5-80ee-6339a41db1c1_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":196,"ik":"41966518-0721-4460-83e3-72b1d77d6605_20","ctt":"LOCATION","pt":"restaurant","lid":23414573,"pir":17,"mid":584430906,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_8a345524-35e7-40f5-80ee-6339a41db1c1",
              stableDiffingType:
                "RestaurantListCard_restaurant_8a345524-35e7-40f5-80ee-6339a41db1c1",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "17. Sachi Park St",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Japanese • Mediterranean • Asian • Healthy",
              },
              secondaryInfo: null,
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.sachirestaurant.com/park-st-in-house-menu",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Sachi Park St",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "23414573",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 4168,
                  maxWidth: 4168,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/d5/b5/3a/sachi-park-st-logo.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "196",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=8a345524-35e7-40f5-80ee-6339a41db1c1",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=8a345524-35e7-40f5-80ee-6339a41db1c1",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "8a345524-35e7-40f5-80ee-6339a41db1c1",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Sachi Park St",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_16",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_91319f44-c38e-418c-a136-72f76d637595_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":1248,"ik":"41966518-0721-4460-83e3-72b1d77d6605_21","ctt":"LOCATION","pt":"restaurant","lid":7681557,"pir":18,"mid":565764169,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_91319f44-c38e-418c-a136-72f76d637595_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "BEST_OF_BEST",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":1248,"ik":"41966518-0721-4460-83e3-72b1d77d6605_21","ctt":"LOCATION","pt":"restaurant","lid":7681557,"pir":18,"mid":565764169,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_91319f44-c38e-418c-a136-72f76d637595",
              stableDiffingType:
                "RestaurantListCard_restaurant_91319f44-c38e-418c-a136-72f76d637595",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "18. Sachi Heliopolis",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$$$ • Healthy • Japanese Fusion • Vegetarian Friendly",
              },
              secondaryInfo: null,
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.sachirestaurant.com/heliopolis-in-house-menus",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Sachi Heliopolis",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "7681557",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 853,
                  maxWidth: 1280,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/b8/e0/49/you-had-us-at-sushi.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "1,248",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=91319f44-c38e-418c-a136-72f76d637595",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=91319f44-c38e-418c-a136-72f76d637595",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "91319f44-c38e-418c-a136-72f76d637595",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Sachi Heliopolis",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_17",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_c744fb69-ea35-4cc1-a806-c9c0f31b188b_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":672,"ik":"41966518-0721-4460-83e3-72b1d77d6605_22","ctt":"LOCATION","pt":"restaurant","lid":8754718,"pir":19,"mid":304813101,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_c744fb69-ea35-4cc1-a806-c9c0f31b188b_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":672,"ik":"41966518-0721-4460-83e3-72b1d77d6605_22","ctt":"LOCATION","pt":"restaurant","lid":8754718,"pir":19,"mid":304813101,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_c744fb69-ea35-4cc1-a806-c9c0f31b188b",
              stableDiffingType:
                "RestaurantListCard_restaurant_c744fb69-ea35-4cc1-a806-c9c0f31b188b",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "19. Bab El-Sharq",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Lebanese • Mediterranean • Barbecue",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.morecravings.com/venues/bab-el-sharq",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Bab El-Sharq",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "8754718",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 787,
                  maxWidth: 1183,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/2b/14/2d/bab-el-sharq.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "672",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=c744fb69-ea35-4cc1-a806-c9c0f31b188b",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=c744fb69-ea35-4cc1-a806-c9c0f31b188b",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "c744fb69-ea35-4cc1-a806-c9c0f31b188b",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Bab El-Sharq",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_18",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_d6d8e5fe-47c9-4188-8947-67724132e399_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":363,"ik":"41966518-0721-4460-83e3-72b1d77d6605_23","ctt":"LOCATION","pt":"restaurant","lid":3329940,"pir":20,"mid":428103555,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_d6d8e5fe-47c9-4188-8947-67724132e399_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":363,"ik":"41966518-0721-4460-83e3-72b1d77d6605_23","ctt":"LOCATION","pt":"restaurant","lid":3329940,"pir":20,"mid":428103555,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_d6d8e5fe-47c9-4188-8947-67724132e399",
              stableDiffingType:
                "RestaurantListCard_restaurant_d6d8e5fe-47c9-4188-8947-67724132e399",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "20. Leonardo Ristorante",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Italian • Pizza • Mediterranean",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl: "https://qrco.de/bbdbfA",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Leonardo Ristorante",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "3329940",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 3872,
                  maxWidth: 5162,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/84/57/83/leonardo-ristorante.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "363",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=d6d8e5fe-47c9-4188-8947-67724132e399",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=d6d8e5fe-47c9-4188-8947-67724132e399",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "d6d8e5fe-47c9-4188-8947-67724132e399",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Leonardo Ristorante",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_19",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_56247dd9-4b5a-42e5-8301-bcedb3afb3d2_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":497,"ik":"41966518-0721-4460-83e3-72b1d77d6605_24","ctt":"LOCATION","pt":"restaurant","lid":2451793,"pir":21,"mid":375322642,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_56247dd9-4b5a-42e5-8301-bcedb3afb3d2_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":497,"ik":"41966518-0721-4460-83e3-72b1d77d6605_24","ctt":"LOCATION","pt":"restaurant","lid":2451793,"pir":21,"mid":375322642,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_56247dd9-4b5a-42e5-8301-bcedb3afb3d2",
              stableDiffingType:
                "RestaurantListCard_restaurant_56247dd9-4b5a-42e5-8301-bcedb3afb3d2",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "21. AL Dabke",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$$$ • Lebanese • Vegetarian Friendly • Vegan Options",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl: "https://qrco.de/bbdbSk",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for AL Dabke",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "2451793",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 3307,
                  maxWidth: 4960,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/5e/f8/12/al-dabke-authentic-atmosphere.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "497",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=56247dd9-4b5a-42e5-8301-bcedb3afb3d2",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=56247dd9-4b5a-42e5-8301-bcedb3afb3d2",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "56247dd9-4b5a-42e5-8301-bcedb3afb3d2",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for AL Dabke",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_20",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_0683f2d3-914c-431c-a187-c928908044b8_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":283,"ik":"41966518-0721-4460-83e3-72b1d77d6605_25","ctt":"LOCATION","pt":"restaurant","lid":4167584,"pir":22,"mid":192347009,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_0683f2d3-914c-431c-a187-c928908044b8_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":283,"ik":"41966518-0721-4460-83e3-72b1d77d6605_25","ctt":"LOCATION","pt":"restaurant","lid":4167584,"pir":22,"mid":192347009,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_0683f2d3-914c-431c-a187-c928908044b8",
              stableDiffingType:
                "RestaurantListCard_restaurant_0683f2d3-914c-431c-a187-c928908044b8",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "22. Chinoix Restaurant",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Chinese • Asian • Cantonese",
              },
              secondaryInfo: null,
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.morecravings.com/venues/chinoix-restaurant",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Chinoix Restaurant",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "4167584",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1365,
                  maxWidth: 2048,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/76/fb/81/chinoix-where-chinese.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "283",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=0683f2d3-914c-431c-a187-c928908044b8",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=0683f2d3-914c-431c-a187-c928908044b8",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "0683f2d3-914c-431c-a187-c928908044b8",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Chinoix Restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_21",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_9bcb0313-913a-4679-bb58-9ac300f26fd4_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":267,"ik":"41966518-0721-4460-83e3-72b1d77d6605_26","ctt":"LOCATION","pt":"restaurant","lid":23199235,"pir":23,"mid":481781885,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_9bcb0313-913a-4679-bb58-9ac300f26fd4_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":267,"ik":"41966518-0721-4460-83e3-72b1d77d6605_26","ctt":"LOCATION","pt":"restaurant","lid":23199235,"pir":23,"mid":481781885,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_9bcb0313-913a-4679-bb58-9ac300f26fd4",
              stableDiffingType:
                "RestaurantListCard_restaurant_9bcb0313-913a-4679-bb58-9ac300f26fd4",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "23. La Zisa",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$$$ • Italian • Mediterranean • European",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.morecravings.com/en/venues/la-zisa",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for La Zisa",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "23199235",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 2199,
                  maxWidth: 2500,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b7/68/7d/la-zisa.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "267",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=9bcb0313-913a-4679-bb58-9ac300f26fd4",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=9bcb0313-913a-4679-bb58-9ac300f26fd4",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "9bcb0313-913a-4679-bb58-9ac300f26fd4",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for La Zisa",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_22",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_1cedd87f-42ed-4af6-9196-aa39f8753f03_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":75,"ik":"41966518-0721-4460-83e3-72b1d77d6605_27","ctt":"LOCATION","pt":"restaurant","lid":21349156,"pir":24,"mid":619578532,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_1cedd87f-42ed-4af6-9196-aa39f8753f03_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":75,"ik":"41966518-0721-4460-83e3-72b1d77d6605_27","ctt":"LOCATION","pt":"restaurant","lid":21349156,"pir":24,"mid":619578532,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_1cedd87f-42ed-4af6-9196-aa39f8753f03",
              stableDiffingType:
                "RestaurantListCard_restaurant_1cedd87f-42ed-4af6-9196-aa39f8753f03",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "24. Meaet",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • American • International • Fusion",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: null,
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "21349156",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 3024,
                  maxWidth: 4032,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/ee/04/a4/meaet.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "75",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=1cedd87f-42ed-4af6-9196-aa39f8753f03",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=1cedd87f-42ed-4af6-9196-aa39f8753f03",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "1cedd87f-42ed-4af6-9196-aa39f8753f03",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Meaet",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_23",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_bb44d8ee-aa46-40d7-a325-7b21ae4da7c2_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":684,"ik":"41966518-0721-4460-83e3-72b1d77d6605_28","ctt":"LOCATION","pt":"restaurant","lid":2629578,"pir":26,"mid":448093942,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_bb44d8ee-aa46-40d7-a325-7b21ae4da7c2_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":684,"ik":"41966518-0721-4460-83e3-72b1d77d6605_28","ctt":"LOCATION","pt":"restaurant","lid":2629578,"pir":26,"mid":448093942,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_bb44d8ee-aa46-40d7-a325-7b21ae4da7c2",
              stableDiffingType:
                "RestaurantListCard_restaurant_bb44d8ee-aa46-40d7-a325-7b21ae4da7c2",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "25. Esplanade Cafe Restaurant",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • International • Mediterranean • European",
              },
              secondaryInfo: null,
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: null,
                firstCommerceButton: {
                  __typename: "AppPresentation_TertiaryCommerceButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.tripadvisor.com/Commerce?p=OpenTable&src=232185426&geo=2629578&from=Restaurants&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=45582&bucket=979641&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=245915723&managed=false&capped=false&gosox=NMlXAP2pKbHpJBdd_T0yLrnSeCIMSZfUNUDKekvG_sbKwu05_rxI0xAbGfc7NUidNGi9I6nuBPmXmunT2F7Y2f8ymB4Wg56d6gfycL-y8Ik&cs=1d6bc72693a20dcad638cb0616d48914e",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Reserve",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Make a reservation at Esplanade Cafe Restaurant",
                      debugValueKey: null,
                    },
                    trackingContext: "server_reserve_1",
                  },
                },
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "2629578",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 4000,
                  maxWidth: 3000,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/b5/5e/f6/esplanade-cafe-restaurant.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "684",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=bb44d8ee-aa46-40d7-a325-7b21ae4da7c2",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=bb44d8ee-aa46-40d7-a325-7b21ae4da7c2",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "bb44d8ee-aa46-40d7-a325-7b21ae4da7c2",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Esplanade Cafe Restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_24",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_45b5214d-691e-434d-a98d-97ef8535a8c8_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":175,"ik":"41966518-0721-4460-83e3-72b1d77d6605_29","ctt":"LOCATION","pt":"restaurant","lid":10374116,"pir":25,"mid":324813711,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_45b5214d-691e-434d-a98d-97ef8535a8c8_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":175,"ik":"41966518-0721-4460-83e3-72b1d77d6605_29","ctt":"LOCATION","pt":"restaurant","lid":10374116,"pir":25,"mid":324813711,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_45b5214d-691e-434d-a98d-97ef8535a8c8",
              stableDiffingType:
                "RestaurantListCard_restaurant_45b5214d-691e-434d-a98d-97ef8535a8c8",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "26. Lemongrass",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Japanese • Sushi • Thai",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.morecravings.com/venues/lemongrass",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Lemongrass",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "10374116",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 3939,
                  maxWidth: 5909,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5c/43/8f/indulge-in-mouthwatering.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "175",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=45b5214d-691e-434d-a98d-97ef8535a8c8",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=45b5214d-691e-434d-a98d-97ef8535a8c8",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "45b5214d-691e-434d-a98d-97ef8535a8c8",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Lemongrass",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_25",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_d70221df-9c17-4da9-bf15-ad4a7940ae85_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":229,"ik":"41966518-0721-4460-83e3-72b1d77d6605_30","ctt":"LOCATION","pt":"restaurant","lid":16827849,"pir":27,"mid":394487342,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_d70221df-9c17-4da9-bf15-ad4a7940ae85_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":229,"ik":"41966518-0721-4460-83e3-72b1d77d6605_30","ctt":"LOCATION","pt":"restaurant","lid":16827849,"pir":27,"mid":394487342,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_d70221df-9c17-4da9-bf15-ad4a7940ae85",
              stableDiffingType:
                "RestaurantListCard_restaurant_d70221df-9c17-4da9-bf15-ad4a7940ae85",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "27. ZEN Cafe & Lounge",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$ • Bar • Cafe • International",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: null,
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "16827849",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1536,
                  maxWidth: 2048,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/83/66/2e/photo0jpg.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "229",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=d70221df-9c17-4da9-bf15-ad4a7940ae85",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=d70221df-9c17-4da9-bf15-ad4a7940ae85",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "d70221df-9c17-4da9-bf15-ad4a7940ae85",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for ZEN Cafe & Lounge",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_26",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_ded13f61-9fa9-42ed-9e68-22d37eb30bac_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":1177,"ik":"41966518-0721-4460-83e3-72b1d77d6605_31","ctt":"LOCATION","pt":"restaurant","lid":1025515,"pir":28,"mid":171550859,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_ded13f61-9fa9-42ed-9e68-22d37eb30bac_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: {
                __typename: "AppPresentation_Badge",
                size: "SMALL",
                type: "TRAVELLER_CHOICE",
                year: "2022",
              },
              trackingKey:
                '{"br":5.0,"rc":1177,"ik":"41966518-0721-4460-83e3-72b1d77d6605_31","ctt":"LOCATION","pt":"restaurant","lid":1025515,"pir":28,"mid":171550859,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_ded13f61-9fa9-42ed-9e68-22d37eb30bac",
              stableDiffingType:
                "RestaurantListCard_restaurant_ded13f61-9fa9-42ed-9e68-22d37eb30bac",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "28. Birdcage",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$$$ • Asian • Thai • Healthy",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl: "https://icsemiramis.com/menus/E-Menu_BC.pdf",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Birdcage",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: {
                  __typename: "AppPresentation_TertiaryCommerceButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://www.tripadvisor.com/Commerce?p=OpenTable&src=232172312&geo=1025515&from=Restaurants&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=45582&bucket=979641&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=245915723&managed=false&capped=false&gosox=NMlXAP2pKbHpJBdd_T0yLrnSeCIMSZfUNUDKekvG_sbKwu05_rxI0xAbGfc7NUidNGi9I6nuBPmXmunT2F7Y2WebUuapdUGfOGnb5viMn38&cs=1a9363927064f70ba18b9fd382bb97558",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Reserve",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Make a reservation at Birdcage",
                      debugValueKey: null,
                    },
                    trackingContext: "server_reserve_1",
                  },
                },
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "1025515",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 2377,
                  maxWidth: 4225,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/39/a8/8b/the-birdcage-is-a-special.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "1,177",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=ded13f61-9fa9-42ed-9e68-22d37eb30bac",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=ded13f61-9fa9-42ed-9e68-22d37eb30bac",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "ded13f61-9fa9-42ed-9e68-22d37eb30bac",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Birdcage",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_27",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_ebf900fa-5f46-4c70-892e-4e19c031252e_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":78,"ik":"41966518-0721-4460-83e3-72b1d77d6605_32","ctt":"LOCATION","pt":"restaurant","lid":23659475,"pir":29,"mid":523654173,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_ebf900fa-5f46-4c70-892e-4e19c031252e_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":78,"ik":"41966518-0721-4460-83e3-72b1d77d6605_32","ctt":"LOCATION","pt":"restaurant","lid":23659475,"pir":29,"mid":523654173,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_ebf900fa-5f46-4c70-892e-4e19c031252e",
              stableDiffingType:
                "RestaurantListCard_restaurant_ebf900fa-5f46-4c70-892e-4e19c031252e",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "29. El-khan Restaurant",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Middle Eastern • Egyptian • Vegetarian Friendly • Vegan Options",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://triumphhotel.com/wp-content/uploads/2022/06/Khan-Menu-Food-FV.pdf",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for El-khan Restaurant",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "23659475",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1672,
                  maxWidth: 2508,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/36/54/1d/experience-an-authentic.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "78",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=ebf900fa-5f46-4c70-892e-4e19c031252e",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=ebf900fa-5f46-4c70-892e-4e19c031252e",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "ebf900fa-5f46-4c70-892e-4e19c031252e",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for El-khan Restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_0_28",
            spacing: "spacing-05",
            clusterId: "EAT_0",
            divider: "full-bleed",
            background: null,
          },
          {
            __typename: "AppPresentation_SingleCard",
            trackingTitle:
              "RestaurantListCard_restaurant_7493a3ae-2469-4176-98df-da2051e9ec7d_EAT_0",
            trackingKey:
              '{"br":5.0,"rc":122,"ik":"41966518-0721-4460-83e3-72b1d77d6605_33","ctt":"LOCATION","pt":"restaurant","lid":23658502,"pir":30,"mid":531655591,"sn":"Attractions"}',
            stableDiffingType:
              "RestaurantListCard_restaurant_7493a3ae-2469-4176-98df-da2051e9ec7d_EAT_0",
            singleCardContent: {
              __typename: "AppPresentation_HorizontalCommerceCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":122,"ik":"41966518-0721-4460-83e3-72b1d77d6605_33","ctt":"LOCATION","pt":"restaurant","lid":23658502,"pir":30,"mid":531655591,"sn":"Attractions"}',
              trackingTitle:
                "RestaurantListCard_restaurant_7493a3ae-2469-4176-98df-da2051e9ec7d",
              stableDiffingType:
                "RestaurantListCard_restaurant_7493a3ae-2469-4176-98df-da2051e9ec7d",
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "30. Piccolino",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Italian • Vegetarian Friendly • Vegan Options • Gluten Free Options",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              commerceTimes: [],
              commerceButtons: {
                __typename: "AppPresentation_Buttons",
                singleButton: {
                  __typename: "AppPresentation_BorderlessButton",
                  commerceTrackingUrl: null,
                  link: {
                    __typename: "AppPresentation_ExternalLink",
                    externalUrl:
                      "https://triumphhotel.com/wp-content/uploads/2022/06/Piccolino-2022_compressed-1.pdf",
                    text: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Menu",
                      debugValueKey: null,
                    },
                    accessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "View menu for Piccolino",
                      debugValueKey: null,
                    },
                    trackingContext: "server_menu",
                  },
                  variant: "PRIMARY",
                },
                firstCommerceButton: null,
                secondCommerceButton: null,
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "23658502",
                type: "location",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1182,
                  maxWidth: 1773,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/b0/6b/a7/enjoy-a-romantic-dinner.jpg?w={width}&h={height}&s=1",
                },
              },
              distance: null,
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "122",
                  debugValueKey: null,
                },
              },
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=7493a3ae-2469-4176-98df-da2051e9ec7d",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=7493a3ae-2469-4176-98df-da2051e9ec7d",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "7493a3ae-2469-4176-98df-da2051e9ec7d",
                    contentType: "restaurant",
                    spAttributionToken: null,
                    wasPlusShown: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Piccolino",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              closureInfo: null,
            },
            clusterId: "EAT_0",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_EAT_1",
            spacing: "spacing-04",
            clusterId: "EAT_1",
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_SecondaryButton",
            clusterId: "EAT_1",
            trackingKey:
              '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_34","bt":"NEXT_PAGE","sn":"Attractions"}',
            trackingTitle: "NextPageButtonSection_EAT_1",
            stableDiffingType: "NextPageButtonSection_EAT_1",
            link: {
              __typename: "AppPresentation_UpdateLink",
              text: {
                __typename: "AppPresentation_LocalizedString",
                string: "Show more",
                debugValueKey: null,
              },
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppList",
                url: "/AppList-g294201-a_contentType.restaurant-a_sort.POPULARITY-a_sortAlgo.desc-a_pagee.eyJzdGFydF9hZnRlciI6WzQuODM5MDE4Mzk4MywiNzQ5M2EzYWUtMjQ2OS00MTc2LTk4ZGYtZGEyMDUxZTllYzdkIl0sInJhY19vZmZzZXQiOm51bGwsIm1heF9yYWNfb2Zmc2V0IjpudWxsLCJvZmZzZXQiOjAsImxpbWl0IjozMH0-a_isList.true.html",
                nonCanonicalUrl:
                  "/AppList-g294201-a_contentType.restaurant-a_sort.POPULARITY-a_sortAlgo.desc-a_pagee.eyJzdGFydF9hZnRlciI6WzQuODM5MDE4Mzk4MywiNzQ5M2EzYWUtMjQ2OS00MTc2LTk4ZGYtZGEyMDUxZTllYzdkIl0sInJhY19vZmZzZXQiOm51bGwsIm1heF9yYWNfb2Zmc2V0IjpudWxsLCJvZmZzZXQiOjAsImxpbWl0IjozMH0-a_isList.true.html",
                typedParams: {
                  __typename: "Routing_AppListParameters",
                  contentType: "restaurant",
                  geoId: 294201,
                  isCollectionView: null,
                  isList: true,
                  isMap: null,
                  isNearby: null,
                  nearLocationId: null,
                  nearLocationType: null,
                  pagee:
                    "eyJzdGFydF9hZnRlciI6WzQuODM5MDE4Mzk4MywiNzQ5M2EzYWUtMjQ2OS00MTc2LTk4ZGYtZGEyMDUxZTllYzdkIl0sInJhY19vZmZzZXQiOm51bGwsIm1heF9yYWNfb2Zmc2V0IjpudWxsLCJvZmZzZXQiOjAsImxpbWl0IjozMH0",
                  sort: "POPULARITY",
                  sortOrder: "desc",
                  routingFilters: null,
                },
              },
              routeKey: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppList",
                url: null,
                nonCanonicalUrl: null,
                typedParams: null,
              },
              autoLoad: true,
              updateToken:
                "eyJ2ZXIiOiJ2MiIsInR5cCI6IkpXVCIsImFsZyI6IkVTMjU2IiwidmVyc2lvbiI6IjEifQ.eyJvYmplY3QiOiJ7XCJAY1wiOlwiLlBhZ2luZ1VwZGF0ZVRva2VuXCIsXCJjbHVzdGVySWRzXCI6W1wiRUFUXzFcIl0sXCJwcm92aWRlclVwZGF0ZVRva2Vuc1wiOntcIlJFU1RBVVJBTlRfUEFHRV9DVVJTT1JcIjp7XCJAY1wiOlwiY29tLnRyaXBhZHZpc29yLnNlcnZpY2UuYXBzLmFkYXB0ZXJzLnJlc3RhdXJhbnRzLlJlc3RhdXJhbnRQYWdlQ3Vyc29yVG9rZW5cIixcInBhZ2VDdXJzb3JcIjpcImV5SnpkR0Z5ZEY5aFpuUmxjaUk2V3pRdU9ETTVNREU0TXprNE15d2lOelE1TTJFellXVXRNalEyT1MwME1UYzJMVGs0WkdZdFpHRXlNRFV4WlRsbFl6ZGtJbDBzSW5KaFkxOXZabVp6WlhRaU9tNTFiR3dzSW0xaGVGOXlZV05mYjJabWMyVjBJanB1ZFd4c0xDSnZabVp6WlhRaU9qQXNJbXhwYldsMElqb3pNSDBcIn0sXCJPUkRJTkFMX09GRlNFVF9QUk9WSURFUlwiOntcIkBjXCI6XCJjb20udHJpcGFkdmlzb3Iuc2VydmljZS5hcHMuT3JkaW5hbE9mZnNldFByb3ZpZGVyVG9rZW5cIixcIm9yZGluYWxPZmZzZXRcIjozMH19LFwicGFnZUluZGV4XCI6MSxcInR5cGVcIjpcIlBBR0lOQVRJT05cIixcInBvbGxpbmdTZXF1ZW5jZU51bVwiOjB9In0.ODU1YmIwMjAtZTAyOC00NjE0LWFjMzEtMjhkMTI4NzFjNjgwLk1FVUNJUUNLTE1ObjdCOUFpb1ZMZWFVcktQVGJGcGwxZV9JNXpUWFJobU9hcnNhX1p3SWdSVHJVbkltRDFkWW5wVEp1U25fOXFucWlNTUhJS1hEbUpFZ1RQeVBXdUZF",
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View more items in this list",
                debugValueKey: null,
              },
              trackingContext: "server_showMore",
            },
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection",
            spacing: "spacing-05",
            clusterId: null,
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_AdPlaceholderNative",
            trackingTitle: "AdPlaceholder_NATIVE_3",
            trackingKey:
              '{"adt":"NATIVE","ik":"41966518-0721-4460-83e3-72b1d77d6605_35","sn":"Attractions"}',
            stableDiffingType: "AdPlaceholder_NATIVE_3",
            clusterId: null,
            adUnitId: "/5349/ta.ta.com.s/af.egypt.cairo",
            adSizes: ["FLUID", "_300x250"],
            targetingParams: [
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "country",
                values: ["294200"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "dest",
                values: ["casino"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "detail",
                values: ["0"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "geo",
                values: ["294201"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "geo_ctx",
                values: ["12028", "12029", "12077", "21827", "21831", "21833"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "hname",
                values: ["Cairo"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "loctype",
                values: ["attractions"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "PageType",
                values: ["Attractions"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "platform",
                values: ["mobile_app"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "rd",
                values: ["com"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "region",
                values: ["3688720"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "pos",
                values: ["footer"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "fluidType",
                values: ["mobile"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "correlator",
                values: ["4182787702391728"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "sess",
                values: ["7DFD24BE5F6E490AB442F694CBC47C4F"],
              },
            ],
          },
        ],
        skippedSections: [],
        mapSections: [
          {
            __typename: "AppPresentation_DynamicMapSection",
            clusterId: "DYNAMIC_MAP",
            trackingKey:
              '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0","mt":"RESTAURANT_SEARCH","sn":"Attractions"}',
            trackingTitle: "DynamicMapSection_DYNAMIC_MAP",
            stableDiffingType: "DynamicMapSection_DYNAMIC_MAP",
            anchor: null,
            center: null,
            pins: [
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_0","ctt":"LOCATION","lid":2602748,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_b21df75e-d968-427b-9a77-cac0bdf633d1",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2602748",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.038889,
                  longitude: 31.230465,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_1","ctt":"LOCATION","lid":17782629,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_879c7b8e-03bf-4bf7-a3a4-df39c79c40e1",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "17782629",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.073317,
                  longitude: 31.222544,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_2","ctt":"LOCATION","lid":2002786,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_8221169a-167d-4dfd-b3fb-991259ba231e",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2002786",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.071648,
                  longitude: 31.22732,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_3","ctt":"LOCATION","lid":13567060,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_d44b9183-38dd-4873-b618-39aa0f05c3d1",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "13567060",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.045794,
                  longitude: 31.232195,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_4","ctt":"LOCATION","lid":8734329,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_b0bbbdfb-df54-43c2-a1fc-c707fb837381",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "8734329",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.04662,
                  longitude: 31.231953,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_5","ctt":"LOCATION","lid":3333673,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_c1adb453-16ac-46af-b835-3eea38be8772",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "3333673",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.106174,
                  longitude: 31.365484,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_6","ctt":"LOCATION","lid":2715802,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_133e6aa0-27b1-4e01-a3b2-b777b8fd1b0f",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2715802",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.072495,
                  longitude: 31.3464,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_7","ctt":"LOCATION","lid":2165744,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_6361f670-3d5f-432c-8937-0f76883753f0",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2165744",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.072426,
                  longitude: 31.346355,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_8","ctt":"LOCATION","lid":2326095,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_857450ee-aa02-459f-9b3a-d5f192e79c09",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2326095",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.038696,
                  longitude: 31.230494,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_9","ctt":"LOCATION","lid":21351187,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_8ae8002b-19e3-4ec3-91fb-39a16adeaf14",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "21351187",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.07308,
                  longitude: 31.222054,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_10","ctt":"LOCATION","lid":3333665,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_790b7712-51fe-477b-bc81-df1281f83343",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "3333665",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.106651,
                  longitude: 31.365698,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_11","ctt":"LOCATION","lid":19655638,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_031d9811-59c4-4428-99e0-bab58ffb0866",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "19655638",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 29.96073,
                  longitude: 31.248098,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_12","ctt":"LOCATION","lid":14774406,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_7be8964c-b0cc-415a-b5a8-cfea803fc46b",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "14774406",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 29.960701,
                  longitude: 31.247915,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_13","ctt":"LOCATION","lid":15656334,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_bbcdbc86-c246-49c4-b5be-2982fd35ad7b",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "15656334",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.0736,
                  longitude: 31.346338,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_14","ctt":"LOCATION","lid":2619464,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_45ca4ef0-0a81-4373-a777-9b7e3f24e9bd",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2619464",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.072433,
                  longitude: 31.3463,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_15","ctt":"LOCATION","lid":11768815,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_a118b305-f372-40d6-9895-a677a4b35766",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "11768815",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.045912,
                  longitude: 31.232006,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_16","ctt":"LOCATION","lid":23414573,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_8a345524-35e7-40f5-80ee-6339a41db1c1",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "23414573",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.02574,
                  longitude: 31.01011,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_17","ctt":"LOCATION","lid":7681557,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_91319f44-c38e-418c-a136-72f76d637595",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "7681557",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.087976,
                  longitude: 31.32484,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_18","ctt":"LOCATION","lid":8754718,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_c744fb69-ea35-4cc1-a806-c9c0f31b188b",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "8754718",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.046337,
                  longitude: 31.233053,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_19","ctt":"LOCATION","lid":3329940,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_d6d8e5fe-47c9-4188-8947-67724132e399",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "3329940",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.106613,
                  longitude: 31.365147,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_20","ctt":"LOCATION","lid":2451793,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_56247dd9-4b5a-42e5-8301-bcedb3afb3d2",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2451793",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.106422,
                  longitude: 31.364853,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_21","ctt":"LOCATION","lid":4167584,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_0683f2d3-914c-431c-a187-c928908044b8",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "4167584",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.074663,
                  longitude: 31.439358,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_22","ctt":"LOCATION","lid":23199235,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_9bcb0313-913a-4679-bb58-9ac300f26fd4",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "23199235",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.062996,
                  longitude: 31.227362,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_23","ctt":"LOCATION","lid":21349156,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_1cedd87f-42ed-4af6-9196-aa39f8753f03",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "21349156",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.05039,
                  longitude: 31.20586,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_24","ctt":"LOCATION","lid":2629578,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_bb44d8ee-aa46-40d7-a325-7b21ae4da7c2",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2629578",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.072414,
                  longitude: 31.346348,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_25","ctt":"LOCATION","lid":10374116,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_45b5214d-691e-434d-a98d-97ef8535a8c8",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "10374116",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.071985,
                  longitude: 31.434305,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_26","ctt":"LOCATION","lid":16827849,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_d70221df-9c17-4da9-bf15-ad4a7940ae85",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "16827849",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 29.960836,
                  longitude: 31.247982,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_27","ctt":"LOCATION","lid":1025515,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_ded13f61-9fa9-42ed-9e68-22d37eb30bac",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "1025515",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.053083,
                  longitude: 31.230413,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_28","ctt":"LOCATION","lid":23659475,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_ebf900fa-5f46-4c70-892e-4e19c031252e",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "23659475",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.003963,
                  longitude: 31.401562,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_0_29","ctt":"LOCATION","lid":23658502,"mit":"restaurants","sn":"Attractions"}',
                trackingTitle:
                  "DynamicMapPinCard_restaurant_7493a3ae-2469-4176-98df-da2051e9ec7d",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "23658502",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 30.003963,
                  longitude: 31.401562,
                },
                fallbackIcon: "RESTAURANT",
              },
            ],
          },
          {
            __typename: "AppPresentation_MapCardCarousel",
            stableDiffingType: "MapCarouselSection_MAP_CARD_CAROUSEL",
            trackingKey:
              '{"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1","mt":"RESTAURANT_SEARCH","sn":"Attractions"}',
            trackingTitle: "MapCarouselSection_MAP_CARD_CAROUSEL",
            clusterId: "MAP_CARD_CAROUSEL",
            content: [
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: null,
                trackingKey:
                  '{"br":5.0,"rc":1606,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_0","ctt":"LOCATION","pt":"restaurant","lid":2602748,"pir":1,"mid":358616154,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_b21df75e-d968-427b-9a77-cac0bdf633d1",
                stableDiffingType:
                  "PoiMapCard_restaurant_b21df75e-d968-427b-9a77-cac0bdf633d1",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2602748",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "The Blue Restaurant & Grill",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Mediterranean • Vegetarian Friendly • Vegan Options",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 2048,
                    maxWidth: 3072,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/60/0c/5a/the-blue-restaurant-6.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "1,606",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=b21df75e-d968-427b-9a77-cac0bdf633d1",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=b21df75e-d968-427b-9a77-cac0bdf633d1",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "b21df75e-d968-427b-9a77-cac0bdf633d1",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for The Blue Restaurant & Grill",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":1654,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_1","ctt":"LOCATION","pt":"restaurant","lid":17782629,"pir":2,"mid":474311744,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_879c7b8e-03bf-4bf7-a3a4-df39c79c40e1",
                stableDiffingType:
                  "PoiMapCard_restaurant_879c7b8e-03bf-4bf7-a3a4-df39c79c40e1",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "17782629",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Beeja",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Mediterranean • Middle Eastern • Egyptian",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 4032,
                    maxWidth: 3024,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/45/6c/40/beeja.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "1,654",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=879c7b8e-03bf-4bf7-a3a4-df39c79c40e1",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=879c7b8e-03bf-4bf7-a3a4-df39c79c40e1",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "879c7b8e-03bf-4bf7-a3a4-df39c79c40e1",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Beeja",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":771,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_2","ctt":"LOCATION","pt":"restaurant","lid":2002786,"pir":3,"mid":384085790,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_8221169a-167d-4dfd-b3fb-991259ba231e",
                stableDiffingType:
                  "PoiMapCard_restaurant_8221169a-167d-4dfd-b3fb-991259ba231e",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2002786",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Saigon Restaurant & Lounge",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$$$ • Japanese • Sushi • Asian",
                },
                secondaryInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 2559,
                    maxWidth: 4166,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e4/af/1e/saigon-restaurant.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "771",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=8221169a-167d-4dfd-b3fb-991259ba231e",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=8221169a-167d-4dfd-b3fb-991259ba231e",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "8221169a-167d-4dfd-b3fb-991259ba231e",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Saigon Restaurant & Lounge",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":554,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_3","ctt":"LOCATION","pt":"restaurant","lid":13567060,"pir":4,"mid":498145751,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_d44b9183-38dd-4873-b618-39aa0f05c3d1",
                stableDiffingType:
                  "PoiMapCard_restaurant_d44b9183-38dd-4873-b618-39aa0f05c3d1",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "13567060",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Lobby Lounge",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Bar • International • Egyptian",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 760,
                    maxWidth: 1125,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/b1/19/d7/relaxed-yet-elegant-seating.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "554",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=d44b9183-38dd-4873-b618-39aa0f05c3d1",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=d44b9183-38dd-4873-b618-39aa0f05c3d1",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "d44b9183-38dd-4873-b618-39aa0f05c3d1",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Lobby Lounge",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: null,
                trackingKey:
                  '{"br":5.0,"rc":813,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_4","ctt":"LOCATION","pt":"restaurant","lid":8734329,"pir":5,"mid":304808994,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_b0bbbdfb-df54-43c2-a1fc-c707fb837381",
                stableDiffingType:
                  "PoiMapCard_restaurant_b0bbbdfb-df54-43c2-a1fc-c707fb837381",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "8734329",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Culina",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • International • Mediterranean • European",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 787,
                    maxWidth: 1183,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/2b/04/22/getlstd-property-photo.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "813",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=b0bbbdfb-df54-43c2-a1fc-c707fb837381",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=b0bbbdfb-df54-43c2-a1fc-c707fb837381",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "b0bbbdfb-df54-43c2-a1fc-c707fb837381",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Culina",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "BEST_OF_BEST",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":774,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_5","ctt":"LOCATION","pt":"restaurant","lid":3333673,"pir":6,"mid":427378157,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_c1adb453-16ac-46af-b835-3eea38be8772",
                stableDiffingType:
                  "PoiMapCard_restaurant_c1adb453-16ac-46af-b835-3eea38be8772",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "3333673",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Noble House",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$$$ • Chinese • Japanese • Seafood",
                },
                secondaryInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 2250,
                    maxWidth: 3000,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/79/45/ed/noble-house-restaurant.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "774",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=c1adb453-16ac-46af-b835-3eea38be8772",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=c1adb453-16ac-46af-b835-3eea38be8772",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "c1adb453-16ac-46af-b835-3eea38be8772",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Noble House",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "BEST_OF_BEST",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":1595,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_6","ctt":"LOCATION","pt":"restaurant","lid":2715802,"pir":7,"mid":246330697,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_133e6aa0-27b1-4e01-a3b2-b777b8fd1b0f",
                stableDiffingType:
                  "PoiMapCard_restaurant_133e6aa0-27b1-4e01-a3b2-b777b8fd1b0f",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2715802",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Al Khal Egyptian Restaurant",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$$$ • Barbecue • Middle Eastern • Egyptian",
                },
                secondaryInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 641,
                    maxWidth: 960,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ae/b5/49/al-khal.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "1,595",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=133e6aa0-27b1-4e01-a3b2-b777b8fd1b0f",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=133e6aa0-27b1-4e01-a3b2-b777b8fd1b0f",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "133e6aa0-27b1-4e01-a3b2-b777b8fd1b0f",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Al Khal Egyptian Restaurant",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":1279,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_7","ctt":"LOCATION","pt":"restaurant","lid":2165744,"pir":8,"mid":412389958,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_6361f670-3d5f-432c-8937-0f76883753f0",
                stableDiffingType:
                  "PoiMapCard_restaurant_6361f670-3d5f-432c-8937-0f76883753f0",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2165744",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Shogun Japanese Restaurant",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$$$ • Japanese • Sushi • Asian",
                },
                secondaryInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 5304,
                    maxWidth: 7952,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/94/92/46/shogun-aquarium.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "1,279",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=6361f670-3d5f-432c-8937-0f76883753f0",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=6361f670-3d5f-432c-8937-0f76883753f0",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "6361f670-3d5f-432c-8937-0f76883753f0",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Shogun Japanese Restaurant",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: null,
                trackingKey:
                  '{"br":5.0,"rc":1071,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_8","ctt":"LOCATION","pt":"restaurant","lid":2326095,"pir":9,"mid":358417772,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_857450ee-aa02-459f-9b3a-d5f192e79c09",
                stableDiffingType:
                  "PoiMapCard_restaurant_857450ee-aa02-459f-9b3a-d5f192e79c09",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2326095",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Osmanly Restaurant",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$$$ • Mediterranean • Barbecue • Turkish",
                },
                secondaryInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 2048,
                    maxWidth: 3072,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5d/05/6c/osmanly-restaurant-1.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "1,071",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=857450ee-aa02-459f-9b3a-d5f192e79c09",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=857450ee-aa02-459f-9b3a-d5f192e79c09",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "857450ee-aa02-459f-9b3a-d5f192e79c09",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Osmanly Restaurant",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":602,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_9","ctt":"LOCATION","pt":"restaurant","lid":21351187,"pir":10,"mid":473482218,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_8ae8002b-19e3-4ec3-91fb-39a16adeaf14",
                stableDiffingType:
                  "PoiMapCard_restaurant_8ae8002b-19e3-4ec3-91fb-39a16adeaf14",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "21351187",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Maat",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Italian • International • Mediterranean",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 960,
                    maxWidth: 1280,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/38/c3/ea/maat.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "602",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=8ae8002b-19e3-4ec3-91fb-39a16adeaf14",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=8ae8002b-19e3-4ec3-91fb-39a16adeaf14",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "8ae8002b-19e3-4ec3-91fb-39a16adeaf14",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Maat",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":463,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_10","ctt":"LOCATION","pt":"restaurant","lid":3333665,"pir":13,"mid":378026720,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_790b7712-51fe-477b-bc81-df1281f83343",
                stableDiffingType:
                  "PoiMapCard_restaurant_790b7712-51fe-477b-bc81-df1281f83343",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "3333665",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Raj",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$$$ • Indian • Vegetarian Friendly • Vegan Options",
                },
                secondaryInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 855,
                    maxWidth: 1280,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/88/3a/e0/renowned-biryani.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "463",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=790b7712-51fe-477b-bc81-df1281f83343",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=790b7712-51fe-477b-bc81-df1281f83343",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "790b7712-51fe-477b-bc81-df1281f83343",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Raj",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":598,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_11","ctt":"LOCATION","pt":"restaurant","lid":19655638,"pir":14,"mid":440653979,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_031d9811-59c4-4428-99e0-bab58ffb0866",
                stableDiffingType:
                  "PoiMapCard_restaurant_031d9811-59c4-4428-99e0-bab58ffb0866",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "19655638",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Solis Restaurant",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Bar • Mediterranean • Healthy",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 3963,
                    maxWidth: 5937,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/43/d8/9b/solis-restaurant.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "598",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=031d9811-59c4-4428-99e0-bab58ffb0866",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=031d9811-59c4-4428-99e0-bab58ffb0866",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "031d9811-59c4-4428-99e0-bab58ffb0866",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Solis Restaurant",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":309,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_12","ctt":"LOCATION","pt":"restaurant","lid":14774406,"pir":12,"mid":433593528,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_7be8964c-b0cc-415a-b5a8-cfea803fc46b",
                stableDiffingType:
                  "PoiMapCard_restaurant_7be8964c-b0cc-415a-b5a8-cfea803fc46b",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "14774406",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Scores Sports Bar & Restaurant",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • American • Bar • International",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 2666,
                    maxWidth: 4000,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/d8/1c/b8/scores-bar-upper-level.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "309",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=7be8964c-b0cc-415a-b5a8-cfea803fc46b",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=7be8964c-b0cc-415a-b5a8-cfea803fc46b",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "7be8964c-b0cc-415a-b5a8-cfea803fc46b",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Scores Sports Bar & Restaurant",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: null,
                trackingKey:
                  '{"br":5.0,"rc":1440,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_13","ctt":"LOCATION","pt":"restaurant","lid":15656334,"pir":11,"mid":379504505,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_bbcdbc86-c246-49c4-b5be-2982fd35ad7b",
                stableDiffingType:
                  "PoiMapCard_restaurant_bbcdbc86-c246-49c4-b5be-2982fd35ad7b",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "15656334",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Nişantaşi",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Mediterranean • Barbecue • Turkish",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1139,
                    maxWidth: 1716,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9e/c7/79/testi-kebab-tavuk-jarra.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "1,440",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=bbcdbc86-c246-49c4-b5be-2982fd35ad7b",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=bbcdbc86-c246-49c4-b5be-2982fd35ad7b",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "bbcdbc86-c246-49c4-b5be-2982fd35ad7b",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Nişantaşi",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: null,
                trackingKey:
                  '{"br":5.0,"rc":1902,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_14","ctt":"LOCATION","pt":"restaurant","lid":2619464,"pir":15,"mid":412385695,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_45ca4ef0-0a81-4373-a777-9b7e3f24e9bd",
                stableDiffingType:
                  "PoiMapCard_restaurant_45ca4ef0-0a81-4373-a777-9b7e3f24e9bd",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2619464",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Fayruz Lebanese Restaurant",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$$$ • Lebanese • Mediterranean • Healthy",
                },
                secondaryInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 5304,
                    maxWidth: 7952,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/94/81/9f/kraides-mashwi-jumbo.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "1,902",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=45ca4ef0-0a81-4373-a777-9b7e3f24e9bd",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=45ca4ef0-0a81-4373-a777-9b7e3f24e9bd",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "45ca4ef0-0a81-4373-a777-9b7e3f24e9bd",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Fayruz Lebanese Restaurant",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":1307,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_15","ctt":"LOCATION","pt":"restaurant","lid":11768815,"pir":16,"mid":312368819,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_a118b305-f372-40d6-9895-a677a4b35766",
                stableDiffingType:
                  "PoiMapCard_restaurant_a118b305-f372-40d6-9895-a677a4b35766",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "11768815",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Vivo - The Nile Ritz-Carlton",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$$$ • Italian • Mediterranean • European",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1333,
                    maxWidth: 2000,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/9e/5e/b3/rustic-and-contemporary.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "1,307",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=a118b305-f372-40d6-9895-a677a4b35766",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=a118b305-f372-40d6-9895-a677a4b35766",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "a118b305-f372-40d6-9895-a677a4b35766",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Vivo - The Nile Ritz-Carlton",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":196,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_16","ctt":"LOCATION","pt":"restaurant","lid":23414573,"pir":17,"mid":584430906,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_8a345524-35e7-40f5-80ee-6339a41db1c1",
                stableDiffingType:
                  "PoiMapCard_restaurant_8a345524-35e7-40f5-80ee-6339a41db1c1",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "23414573",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Sachi Park St",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Japanese • Mediterranean • Asian • Healthy",
                },
                secondaryInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 4168,
                    maxWidth: 4168,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/d5/b5/3a/sachi-park-st-logo.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "196",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=8a345524-35e7-40f5-80ee-6339a41db1c1",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=8a345524-35e7-40f5-80ee-6339a41db1c1",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "8a345524-35e7-40f5-80ee-6339a41db1c1",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Sachi Park St",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "BEST_OF_BEST",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":1248,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_17","ctt":"LOCATION","pt":"restaurant","lid":7681557,"pir":18,"mid":565764169,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_91319f44-c38e-418c-a136-72f76d637595",
                stableDiffingType:
                  "PoiMapCard_restaurant_91319f44-c38e-418c-a136-72f76d637595",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "7681557",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Sachi Heliopolis",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$$$ • Healthy • Japanese Fusion • Vegetarian Friendly",
                },
                secondaryInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 853,
                    maxWidth: 1280,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/b8/e0/49/you-had-us-at-sushi.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "1,248",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=91319f44-c38e-418c-a136-72f76d637595",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=91319f44-c38e-418c-a136-72f76d637595",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "91319f44-c38e-418c-a136-72f76d637595",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Sachi Heliopolis",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":672,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_18","ctt":"LOCATION","pt":"restaurant","lid":8754718,"pir":19,"mid":304813101,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_c744fb69-ea35-4cc1-a806-c9c0f31b188b",
                stableDiffingType:
                  "PoiMapCard_restaurant_c744fb69-ea35-4cc1-a806-c9c0f31b188b",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "8754718",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Bab El-Sharq",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Lebanese • Mediterranean • Barbecue",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 787,
                    maxWidth: 1183,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/2b/14/2d/bab-el-sharq.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "672",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=c744fb69-ea35-4cc1-a806-c9c0f31b188b",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=c744fb69-ea35-4cc1-a806-c9c0f31b188b",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "c744fb69-ea35-4cc1-a806-c9c0f31b188b",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Bab El-Sharq",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":363,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_19","ctt":"LOCATION","pt":"restaurant","lid":3329940,"pir":20,"mid":428103555,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_d6d8e5fe-47c9-4188-8947-67724132e399",
                stableDiffingType:
                  "PoiMapCard_restaurant_d6d8e5fe-47c9-4188-8947-67724132e399",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "3329940",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Leonardo Ristorante",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Italian • Pizza • Mediterranean",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 3872,
                    maxWidth: 5162,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/84/57/83/leonardo-ristorante.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "363",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=d6d8e5fe-47c9-4188-8947-67724132e399",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=d6d8e5fe-47c9-4188-8947-67724132e399",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "d6d8e5fe-47c9-4188-8947-67724132e399",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Leonardo Ristorante",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":497,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_20","ctt":"LOCATION","pt":"restaurant","lid":2451793,"pir":21,"mid":375322642,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_56247dd9-4b5a-42e5-8301-bcedb3afb3d2",
                stableDiffingType:
                  "PoiMapCard_restaurant_56247dd9-4b5a-42e5-8301-bcedb3afb3d2",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2451793",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "AL Dabke",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$$$ • Lebanese • Vegetarian Friendly • Vegan Options",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 3307,
                    maxWidth: 4960,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/5e/f8/12/al-dabke-authentic-atmosphere.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "497",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=56247dd9-4b5a-42e5-8301-bcedb3afb3d2",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=56247dd9-4b5a-42e5-8301-bcedb3afb3d2",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "56247dd9-4b5a-42e5-8301-bcedb3afb3d2",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for AL Dabke",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":283,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_21","ctt":"LOCATION","pt":"restaurant","lid":4167584,"pir":22,"mid":192347009,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_0683f2d3-914c-431c-a187-c928908044b8",
                stableDiffingType:
                  "PoiMapCard_restaurant_0683f2d3-914c-431c-a187-c928908044b8",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "4167584",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Chinoix Restaurant",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Chinese • Asian • Cantonese",
                },
                secondaryInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1365,
                    maxWidth: 2048,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/76/fb/81/chinoix-where-chinese.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "283",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=0683f2d3-914c-431c-a187-c928908044b8",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=0683f2d3-914c-431c-a187-c928908044b8",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "0683f2d3-914c-431c-a187-c928908044b8",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Chinoix Restaurant",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":267,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_22","ctt":"LOCATION","pt":"restaurant","lid":23199235,"pir":23,"mid":481781885,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_9bcb0313-913a-4679-bb58-9ac300f26fd4",
                stableDiffingType:
                  "PoiMapCard_restaurant_9bcb0313-913a-4679-bb58-9ac300f26fd4",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "23199235",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "La Zisa",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$$$ • Italian • Mediterranean • European",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 2199,
                    maxWidth: 2500,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b7/68/7d/la-zisa.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "267",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=9bcb0313-913a-4679-bb58-9ac300f26fd4",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=9bcb0313-913a-4679-bb58-9ac300f26fd4",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "9bcb0313-913a-4679-bb58-9ac300f26fd4",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for La Zisa",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: null,
                trackingKey:
                  '{"br":5.0,"rc":75,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_23","ctt":"LOCATION","pt":"restaurant","lid":21349156,"pir":24,"mid":619578532,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_1cedd87f-42ed-4af6-9196-aa39f8753f03",
                stableDiffingType:
                  "PoiMapCard_restaurant_1cedd87f-42ed-4af6-9196-aa39f8753f03",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "21349156",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Meaet",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • American • International • Fusion",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 3024,
                    maxWidth: 4032,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/ee/04/a4/meaet.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "75",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=1cedd87f-42ed-4af6-9196-aa39f8753f03",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=1cedd87f-42ed-4af6-9196-aa39f8753f03",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "1cedd87f-42ed-4af6-9196-aa39f8753f03",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Meaet",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":684,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_24","ctt":"LOCATION","pt":"restaurant","lid":2629578,"pir":26,"mid":448093942,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_bb44d8ee-aa46-40d7-a325-7b21ae4da7c2",
                stableDiffingType:
                  "PoiMapCard_restaurant_bb44d8ee-aa46-40d7-a325-7b21ae4da7c2",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2629578",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Esplanade Cafe Restaurant",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • International • Mediterranean • European",
                },
                secondaryInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 4000,
                    maxWidth: 3000,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/b5/5e/f6/esplanade-cafe-restaurant.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "684",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=bb44d8ee-aa46-40d7-a325-7b21ae4da7c2",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=bb44d8ee-aa46-40d7-a325-7b21ae4da7c2",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "bb44d8ee-aa46-40d7-a325-7b21ae4da7c2",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Esplanade Cafe Restaurant",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":175,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_25","ctt":"LOCATION","pt":"restaurant","lid":10374116,"pir":25,"mid":324813711,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_45b5214d-691e-434d-a98d-97ef8535a8c8",
                stableDiffingType:
                  "PoiMapCard_restaurant_45b5214d-691e-434d-a98d-97ef8535a8c8",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "10374116",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Lemongrass",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Japanese • Sushi • Thai",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 3939,
                    maxWidth: 5909,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5c/43/8f/indulge-in-mouthwatering.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "175",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=45b5214d-691e-434d-a98d-97ef8535a8c8",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=45b5214d-691e-434d-a98d-97ef8535a8c8",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "45b5214d-691e-434d-a98d-97ef8535a8c8",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Lemongrass",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":229,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_26","ctt":"LOCATION","pt":"restaurant","lid":16827849,"pir":27,"mid":394487342,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_d70221df-9c17-4da9-bf15-ad4a7940ae85",
                stableDiffingType:
                  "PoiMapCard_restaurant_d70221df-9c17-4da9-bf15-ad4a7940ae85",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "16827849",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "ZEN Cafe & Lounge",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$ • Bar • Cafe • International",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1536,
                    maxWidth: 2048,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/83/66/2e/photo0jpg.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "229",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=d70221df-9c17-4da9-bf15-ad4a7940ae85",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=d70221df-9c17-4da9-bf15-ad4a7940ae85",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "d70221df-9c17-4da9-bf15-ad4a7940ae85",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for ZEN Cafe & Lounge",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "SMALL",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":1177,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_27","ctt":"LOCATION","pt":"restaurant","lid":1025515,"pir":28,"mid":171550859,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_ded13f61-9fa9-42ed-9e68-22d37eb30bac",
                stableDiffingType:
                  "PoiMapCard_restaurant_ded13f61-9fa9-42ed-9e68-22d37eb30bac",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "1025515",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Birdcage",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$$$ • Asian • Thai • Healthy",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 2377,
                    maxWidth: 4225,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/39/a8/8b/the-birdcage-is-a-special.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "1,177",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=ded13f61-9fa9-42ed-9e68-22d37eb30bac",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=ded13f61-9fa9-42ed-9e68-22d37eb30bac",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "ded13f61-9fa9-42ed-9e68-22d37eb30bac",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Birdcage",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: null,
                trackingKey:
                  '{"br":5.0,"rc":78,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_28","ctt":"LOCATION","pt":"restaurant","lid":23659475,"pir":29,"mid":523654173,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_ebf900fa-5f46-4c70-892e-4e19c031252e",
                stableDiffingType:
                  "PoiMapCard_restaurant_ebf900fa-5f46-4c70-892e-4e19c031252e",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "23659475",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "El-khan Restaurant",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Middle Eastern • Egyptian • Vegetarian Friendly • Vegan Options",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1672,
                    maxWidth: 2508,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/36/54/1d/experience-an-authentic.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "78",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=ebf900fa-5f46-4c70-892e-4e19c031252e",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=ebf900fa-5f46-4c70-892e-4e19c031252e",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "ebf900fa-5f46-4c70-892e-4e19c031252e",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for El-khan Restaurant",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
              {
                __typename: "AppPresentation_HorizontalMerchandisingCard",
                badge: null,
                trackingKey:
                  '{"br":5.0,"rc":122,"ik":"41966518-0721-4460-83e3-72b1d77d6605_map_1_29","ctt":"LOCATION","pt":"restaurant","lid":23658502,"pir":30,"mid":531655591,"sn":"Attractions"}',
                trackingTitle:
                  "PoiMapCard_restaurant_7493a3ae-2469-4176-98df-da2051e9ec7d",
                stableDiffingType:
                  "PoiMapCard_restaurant_7493a3ae-2469-4176-98df-da2051e9ec7d",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "23658502",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Piccolino",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Italian • Vegetarian Friendly • Vegan Options • Gluten Free Options",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now",
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1182,
                    maxWidth: 1773,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/b0/6b/a7/enjoy-a-romantic-dinner.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "122",
                    debugValueKey: null,
                  },
                },
                distance: null,
                labels: [],
                descriptiveText: null,
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=7493a3ae-2469-4176-98df-da2051e9ec7d",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=7493a3ae-2469-4176-98df-da2051e9ec7d",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "7493a3ae-2469-4176-98df-da2051e9ec7d",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Piccolino",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                merchandisingText: null,
                commerceButtons: null,
                closureInfo: null,
              },
            ],
          },
        ],
        impressions: [
          {
            __typename: "AppPresentation_ImpressionLog",
            data: "noClientLog",
          },
        ],
        status: {
          __typename: "AppPresentation_QueryResponseStatus",
          message: null,
          success: true,
          pollingStatus: null,
        },
        commerce: {
          __typename: "AppPresentation_CommerceParameters",
          attractionCommerce: {
            __typename: "AppPresentation_AttractionCommerceParameters",
            setByUser: false,
            updated: null,
            startDate: "2022-10-18",
            endDate: "2022-10-19",
            pax: [
              {
                __typename: "AppPresentation_AgeBandSelection",
                count: 2,
                ageBand: "ADULT",
                endAge: null,
                maxTravelersPerBooking: null,
                minTravelersPerBooking: null,
                startAge: null,
              },
            ],
          },
          hotelCommerce: {
            __typename: "AppPresentation_HotelCommerceParameters",
            setByUser: false,
            updated: null,
            checkIn: "2022-10-17",
            checkOut: "2022-10-18",
            rooms: [
              {
                __typename: "AppPresentation_HotelRoom",
                adults: 2,
                childrenAges: [],
              },
            ],
          },
          restaurantCommerce: {
            __typename: "AppPresentation_RestaurantCommerceParameters",
            setByUser: false,
            updated: null,
            partySize: 2,
            reservationTime: "2022-10-17T20:00:00",
          },
          lastUpdated: "2022-10-17T06:55:23.105193-04:00",
        },
        updatedClusterIds: [],
        trackingKey:
          '{"ik":"41966518-0721-4460-83e3-72b1d77d6605","lid":294201,"sn":"Attractions"}',
      },
    ],
  },
};

export const restaurant = {
  data: {
    AppPresentation_queryAppDetailV2: [
      {
        __typename: "AppPresentation_QueryAppDetailResponse",
        container: {
          __typename: "AppPresentation_DetailResponseContainer",
          navTitle: "Pizza 4P’s Nha Trang – NT",
          isSaved: false,
          saveId: {
            __typename: "Trips_ReferenceV2",
            id: "19085668",
            type: "location",
          },
          shareInfo: {
            __typename: "AppPresentation_ShareInfo",
            emailBody: {
              __typename: "AppPresentation_HtmlString",
              htmlString:
                '<html><a href="https://www.tripadvisor.com/Restaurant_Review-g293928-d19085668-Reviews-Pizza_4P_s_Nha_Trang_NT-Nha_Trang_Khanh_Hoa_Province.html">https://www.tripadvisor.com/Restaurant_Review-g293928-d19085668-Reviews-Pizza_4P_s_Nha_Trang_NT-Nha_Trang_Khanh_Hoa_Province.html</a><br /><br />Download the <a href="https://www.tripadvisor.com/apps">Tripadvisor app</a> now to check it out and discover more places that travelers like you recommend.</html>',
            },
            emailSubject: {
              __typename: "AppPresentation_LocalizedString",
              string: "Check out Pizza 4P’s Nha Trang – NT on Tripadvisor",
              debugValueKey: null,
            },
            nonEmailMessage: {
              __typename: "AppPresentation_LocalizedString",
              string:
                "https://www.tripadvisor.com/Restaurant_Review-g293928-d19085668-Reviews-Pizza_4P_s_Nha_Trang_NT-Nha_Trang_Khanh_Hoa_Province.html",
              debugValueKey: null,
            },
            webUrl:
              "https://www.tripadvisor.com/Restaurant_Review-g293928-d19085668-Reviews-Pizza_4P_s_Nha_Trang_NT-Nha_Trang_Khanh_Hoa_Province.html",
          },
        },
        skippedSections: [],
        sections: [
          {
            __typename: "AppPresentation_PoiHeroStandard",
            trackingTitle: "HeroMediaSection_HERO_MEDIA",
            trackingKey:
              '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_0","lid":19085668,"sn":"Restaurant_Review"}',
            stableDiffingType: "HeroMediaSection_HERO_MEDIA",
            photoCount: 101,
            galleryLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "MediaGallery",
                url: "/MediaGallery?locationId=19085668&geo=19085668&cfg=rr",
                nonCanonicalUrl:
                  "/MediaGallery?locationId=19085668&geo=19085668&cfg=rr",
                typedParams: {
                  __typename: "Routing_MediaGalleryParameters",
                  albumId: null,
                  locationIdStr: "19085668",
                  galleryConfig: "rr",
                  offset: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: null,
              trackingContext: "server_mediaGallery",
            },
            sponsoredBy: null,
            albumPhotos: [
              {
                __typename: "AppPresentation_Media",
                data: {
                  __typename: "Media_PhotoResult",
                  id: 442997144,
                  caption: "Burrata Parma Ham Pizza",
                  publishedDateTime: "2019-12-27T05:01:03.689Z",
                  thumbsUpVotes: 0,
                  uploadDateTime: "2019-12-27T05:01:03.689Z",
                  attribution: {
                    __typename: "Media_Attribution",
                    text: "Photo provided by management",
                  },
                  photoSizeDynamic: {
                    __typename: "Media_PhotoResultSizeDynamic",
                    maxHeight: 1500,
                    maxWidth: 2250,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/67/99/98/burrata-parma-ham-pizza.jpg?w={width}&h={height}&s=1",
                  },
                  sizes: [
                    {
                      __typename: "Media_MediaSize",
                      width: 0,
                      height: 0,
                      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/67/99/98/burrata-parma-ham-pizza.jpg?w=100&h=100&s=1",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 50,
                      height: 50,
                      url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/67/99/98/burrata-parma-ham-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 150,
                      height: 150,
                      url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/67/99/98/burrata-parma-ham-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 180,
                      height: 200,
                      url: "https://media-cdn.tripadvisor.com/media/photo-i/1a/67/99/98/burrata-parma-ham-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 250,
                      height: 167,
                      url: "https://media-cdn.tripadvisor.com/media/photo-f/1a/67/99/98/burrata-parma-ham-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 550,
                      height: 367,
                      url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/67/99/98/burrata-parma-ham-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 1024,
                      height: 683,
                      url: "https://media-cdn.tripadvisor.com/media/photo-w/1a/67/99/98/burrata-parma-ham-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 1280,
                      height: 853,
                      url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/67/99/98/burrata-parma-ham-pizza.jpg",
                    },
                  ],
                },
              },
              {
                __typename: "AppPresentation_Media",
                data: {
                  __typename: "Media_PhotoResult",
                  id: 434867314,
                  caption: "4 cheese pizza",
                  publishedDateTime: "2019-11-04T07:59:01.082Z",
                  thumbsUpVotes: 0,
                  uploadDateTime: "2019-11-04T07:59:01.082Z",
                  attribution: {
                    __typename: "Media_Attribution",
                    text: "Photo provided by management",
                  },
                  photoSizeDynamic: {
                    __typename: "Media_PhotoResultSizeDynamic",
                    maxHeight: 239,
                    maxWidth: 239,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/eb/8c/72/4-cheese-pizza.jpg?w={width}&h={height}&s=1",
                  },
                  sizes: [
                    {
                      __typename: "Media_MediaSize",
                      width: 0,
                      height: 0,
                      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/eb/8c/72/4-cheese-pizza.jpg?w=100&h=100&s=1",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 50,
                      height: 50,
                      url: "https://media-cdn.tripadvisor.com/media/photo-t/19/eb/8c/72/4-cheese-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 150,
                      height: 150,
                      url: "https://media-cdn.tripadvisor.com/media/photo-l/19/eb/8c/72/4-cheese-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 180,
                      height: 200,
                      url: "https://media-cdn.tripadvisor.com/media/photo-i/19/eb/8c/72/4-cheese-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 205,
                      height: 205,
                      url: "https://media-cdn.tripadvisor.com/media/photo-f/19/eb/8c/72/4-cheese-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 239,
                      height: 239,
                      url: "https://media-cdn.tripadvisor.com/media/photo-o/19/eb/8c/72/4-cheese-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 450,
                      height: 450,
                      url: "https://media-cdn.tripadvisor.com/media/photo-s/19/eb/8c/72/4-cheese-pizza.jpg",
                    },
                  ],
                },
              },
              {
                __typename: "AppPresentation_Media",
                data: {
                  __typename: "Media_PhotoResult",
                  id: 434867313,
                  caption: "Burrata Parma Ham pizza",
                  publishedDateTime: "2019-11-04T07:59:00.566Z",
                  thumbsUpVotes: 1,
                  uploadDateTime: "2019-11-04T07:59:00.566Z",
                  attribution: {
                    __typename: "Media_Attribution",
                    text: "Photo provided by management",
                  },
                  photoSizeDynamic: {
                    __typename: "Media_PhotoResultSizeDynamic",
                    maxHeight: 239,
                    maxWidth: 239,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/eb/8c/71/burrata-parma-ham-pizza.jpg?w={width}&h={height}&s=1",
                  },
                  sizes: [
                    {
                      __typename: "Media_MediaSize",
                      width: 0,
                      height: 0,
                      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/eb/8c/71/burrata-parma-ham-pizza.jpg?w=100&h=100&s=1",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 50,
                      height: 50,
                      url: "https://media-cdn.tripadvisor.com/media/photo-t/19/eb/8c/71/burrata-parma-ham-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 150,
                      height: 150,
                      url: "https://media-cdn.tripadvisor.com/media/photo-l/19/eb/8c/71/burrata-parma-ham-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 180,
                      height: 200,
                      url: "https://media-cdn.tripadvisor.com/media/photo-i/19/eb/8c/71/burrata-parma-ham-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 205,
                      height: 205,
                      url: "https://media-cdn.tripadvisor.com/media/photo-f/19/eb/8c/71/burrata-parma-ham-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 239,
                      height: 239,
                      url: "https://media-cdn.tripadvisor.com/media/photo-o/19/eb/8c/71/burrata-parma-ham-pizza.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 450,
                      height: 450,
                      url: "https://media-cdn.tripadvisor.com/media/photo-s/19/eb/8c/71/burrata-parma-ham-pizza.jpg",
                    },
                  ],
                },
              },
              {
                __typename: "AppPresentation_Media",
                data: {
                  __typename: "Media_PhotoResult",
                  id: 434867311,
                  caption: "Crab Tomato Cream Spaghetti with Ricotta Cheese\n",
                  publishedDateTime: "2019-11-04T07:59:00.068Z",
                  thumbsUpVotes: 0,
                  uploadDateTime: "2019-11-04T07:59:00.068Z",
                  attribution: {
                    __typename: "Media_Attribution",
                    text: "Photo provided by management",
                  },
                  photoSizeDynamic: {
                    __typename: "Media_PhotoResultSizeDynamic",
                    maxHeight: 239,
                    maxWidth: 239,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/eb/8c/6f/crab-tomato-cream-spaghetti.jpg?w={width}&h={height}&s=1",
                  },
                  sizes: [
                    {
                      __typename: "Media_MediaSize",
                      width: 0,
                      height: 0,
                      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/eb/8c/6f/crab-tomato-cream-spaghetti.jpg?w=100&h=100&s=1",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 50,
                      height: 50,
                      url: "https://media-cdn.tripadvisor.com/media/photo-t/19/eb/8c/6f/crab-tomato-cream-spaghetti.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 150,
                      height: 150,
                      url: "https://media-cdn.tripadvisor.com/media/photo-l/19/eb/8c/6f/crab-tomato-cream-spaghetti.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 180,
                      height: 200,
                      url: "https://media-cdn.tripadvisor.com/media/photo-i/19/eb/8c/6f/crab-tomato-cream-spaghetti.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 205,
                      height: 205,
                      url: "https://media-cdn.tripadvisor.com/media/photo-f/19/eb/8c/6f/crab-tomato-cream-spaghetti.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 239,
                      height: 239,
                      url: "https://media-cdn.tripadvisor.com/media/photo-o/19/eb/8c/6f/crab-tomato-cream-spaghetti.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 450,
                      height: 450,
                      url: "https://media-cdn.tripadvisor.com/media/photo-s/19/eb/8c/6f/crab-tomato-cream-spaghetti.jpg",
                    },
                  ],
                },
              },
              {
                __typename: "AppPresentation_Media",
                data: {
                  __typename: "Media_PhotoResult",
                  id: 427486841,
                  caption: "Enjoy our pizza with fantastic sea view",
                  publishedDateTime: "2019-10-04T03:30:16.739Z",
                  thumbsUpVotes: 0,
                  uploadDateTime: "2019-10-04T03:30:16.739Z",
                  attribution: {
                    __typename: "Media_Attribution",
                    text: "Photo provided by management",
                  },
                  photoSizeDynamic: {
                    __typename: "Media_PhotoResultSizeDynamic",
                    maxHeight: 1800,
                    maxWidth: 1800,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/7a/ee/79/enjoy-our-pizza-with.jpg?w={width}&h={height}&s=1",
                  },
                  sizes: [
                    {
                      __typename: "Media_MediaSize",
                      width: 0,
                      height: 0,
                      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/7a/ee/79/enjoy-our-pizza-with.jpg?w=100&h=100&s=1",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 50,
                      height: 50,
                      url: "https://media-cdn.tripadvisor.com/media/photo-t/19/7a/ee/79/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 150,
                      height: 150,
                      url: "https://media-cdn.tripadvisor.com/media/photo-l/19/7a/ee/79/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 180,
                      height: 200,
                      url: "https://media-cdn.tripadvisor.com/media/photo-i/19/7a/ee/79/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 205,
                      height: 205,
                      url: "https://media-cdn.tripadvisor.com/media/photo-f/19/7a/ee/79/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 450,
                      height: 450,
                      url: "https://media-cdn.tripadvisor.com/media/photo-s/19/7a/ee/79/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 550,
                      height: 550,
                      url: "https://media-cdn.tripadvisor.com/media/photo-p/19/7a/ee/79/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 1024,
                      height: 1024,
                      url: "https://media-cdn.tripadvisor.com/media/photo-w/19/7a/ee/79/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 1280,
                      height: 1280,
                      url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/7a/ee/79/enjoy-our-pizza-with.jpg",
                    },
                  ],
                },
              },
              {
                __typename: "AppPresentation_Media",
                data: {
                  __typename: "Media_PhotoResult",
                  id: 427486831,
                  caption: "Enjoy our pizza with fantastic sea view",
                  publishedDateTime: "2019-10-04T03:30:03.3Z",
                  thumbsUpVotes: 0,
                  uploadDateTime: "2019-10-04T03:30:03.3Z",
                  attribution: {
                    __typename: "Media_Attribution",
                    text: "Photo provided by management",
                  },
                  photoSizeDynamic: {
                    __typename: "Media_PhotoResultSizeDynamic",
                    maxHeight: 1800,
                    maxWidth: 1800,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/7a/ee/6f/enjoy-our-pizza-with.jpg?w={width}&h={height}&s=1",
                  },
                  sizes: [
                    {
                      __typename: "Media_MediaSize",
                      width: 0,
                      height: 0,
                      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/7a/ee/6f/enjoy-our-pizza-with.jpg?w=100&h=100&s=1",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 50,
                      height: 50,
                      url: "https://media-cdn.tripadvisor.com/media/photo-t/19/7a/ee/6f/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 150,
                      height: 150,
                      url: "https://media-cdn.tripadvisor.com/media/photo-l/19/7a/ee/6f/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 180,
                      height: 200,
                      url: "https://media-cdn.tripadvisor.com/media/photo-i/19/7a/ee/6f/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 205,
                      height: 205,
                      url: "https://media-cdn.tripadvisor.com/media/photo-f/19/7a/ee/6f/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 450,
                      height: 450,
                      url: "https://media-cdn.tripadvisor.com/media/photo-s/19/7a/ee/6f/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 550,
                      height: 550,
                      url: "https://media-cdn.tripadvisor.com/media/photo-p/19/7a/ee/6f/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 1024,
                      height: 1024,
                      url: "https://media-cdn.tripadvisor.com/media/photo-w/19/7a/ee/6f/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 1280,
                      height: 1280,
                      url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/7a/ee/6f/enjoy-our-pizza-with.jpg",
                    },
                  ],
                },
              },
              {
                __typename: "AppPresentation_Media",
                data: {
                  __typename: "Media_PhotoResult",
                  id: 427486807,
                  caption: "Enjoy our pizza with fantastic sea view",
                  publishedDateTime: "2019-10-04T03:29:40.854Z",
                  thumbsUpVotes: 0,
                  uploadDateTime: "2019-10-04T03:29:40.854Z",
                  attribution: {
                    __typename: "Media_Attribution",
                    text: "Photo provided by management",
                  },
                  photoSizeDynamic: {
                    __typename: "Media_PhotoResultSizeDynamic",
                    maxHeight: 1800,
                    maxWidth: 1800,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/7a/ee/57/enjoy-our-pizza-with.jpg?w={width}&h={height}&s=1",
                  },
                  sizes: [
                    {
                      __typename: "Media_MediaSize",
                      width: 0,
                      height: 0,
                      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/7a/ee/57/enjoy-our-pizza-with.jpg?w=100&h=100&s=1",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 50,
                      height: 50,
                      url: "https://media-cdn.tripadvisor.com/media/photo-t/19/7a/ee/57/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 150,
                      height: 150,
                      url: "https://media-cdn.tripadvisor.com/media/photo-l/19/7a/ee/57/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 180,
                      height: 200,
                      url: "https://media-cdn.tripadvisor.com/media/photo-i/19/7a/ee/57/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 205,
                      height: 205,
                      url: "https://media-cdn.tripadvisor.com/media/photo-f/19/7a/ee/57/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 450,
                      height: 450,
                      url: "https://media-cdn.tripadvisor.com/media/photo-s/19/7a/ee/57/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 550,
                      height: 550,
                      url: "https://media-cdn.tripadvisor.com/media/photo-p/19/7a/ee/57/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 1024,
                      height: 1024,
                      url: "https://media-cdn.tripadvisor.com/media/photo-w/19/7a/ee/57/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 1280,
                      height: 1280,
                      url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/7a/ee/57/enjoy-our-pizza-with.jpg",
                    },
                  ],
                },
              },
              {
                __typename: "AppPresentation_Media",
                data: {
                  __typename: "Media_PhotoResult",
                  id: 427486776,
                  caption: "Enjoy our pizza with fantastic sea view",
                  publishedDateTime: "2019-10-04T03:29:16.101Z",
                  thumbsUpVotes: 0,
                  uploadDateTime: "2019-10-04T03:29:16.101Z",
                  attribution: {
                    __typename: "Media_Attribution",
                    text: "Photo provided by management",
                  },
                  photoSizeDynamic: {
                    __typename: "Media_PhotoResultSizeDynamic",
                    maxHeight: 1271,
                    maxWidth: 1271,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/7a/ee/38/enjoy-our-pizza-with.jpg?w={width}&h={height}&s=1",
                  },
                  sizes: [
                    {
                      __typename: "Media_MediaSize",
                      width: 0,
                      height: 0,
                      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/7a/ee/38/enjoy-our-pizza-with.jpg?w=100&h=100&s=1",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 50,
                      height: 50,
                      url: "https://media-cdn.tripadvisor.com/media/photo-t/19/7a/ee/38/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 150,
                      height: 150,
                      url: "https://media-cdn.tripadvisor.com/media/photo-l/19/7a/ee/38/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 180,
                      height: 200,
                      url: "https://media-cdn.tripadvisor.com/media/photo-i/19/7a/ee/38/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 205,
                      height: 205,
                      url: "https://media-cdn.tripadvisor.com/media/photo-f/19/7a/ee/38/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 450,
                      height: 450,
                      url: "https://media-cdn.tripadvisor.com/media/photo-s/19/7a/ee/38/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 550,
                      height: 550,
                      url: "https://media-cdn.tripadvisor.com/media/photo-p/19/7a/ee/38/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 1024,
                      height: 1024,
                      url: "https://media-cdn.tripadvisor.com/media/photo-w/19/7a/ee/38/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 1271,
                      height: 1271,
                      url: "https://media-cdn.tripadvisor.com/media/photo-o/19/7a/ee/38/enjoy-our-pizza-with.jpg",
                    },
                  ],
                },
              },
              {
                __typename: "AppPresentation_Media",
                data: {
                  __typename: "Media_PhotoResult",
                  id: 427486765,
                  caption: "Enjoy our pizza with fantastic sea view",
                  publishedDateTime: "2019-10-04T03:29:09.77Z",
                  thumbsUpVotes: 0,
                  uploadDateTime: "2019-10-04T03:29:09.77Z",
                  attribution: {
                    __typename: "Media_Attribution",
                    text: "Photo provided by management",
                  },
                  photoSizeDynamic: {
                    __typename: "Media_PhotoResultSizeDynamic",
                    maxHeight: 1363,
                    maxWidth: 1363,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/7a/ee/2d/enjoy-our-pizza-with.jpg?w={width}&h={height}&s=1",
                  },
                  sizes: [
                    {
                      __typename: "Media_MediaSize",
                      width: 0,
                      height: 0,
                      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/7a/ee/2d/enjoy-our-pizza-with.jpg?w=100&h=100&s=1",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 50,
                      height: 50,
                      url: "https://media-cdn.tripadvisor.com/media/photo-t/19/7a/ee/2d/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 150,
                      height: 150,
                      url: "https://media-cdn.tripadvisor.com/media/photo-l/19/7a/ee/2d/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 180,
                      height: 200,
                      url: "https://media-cdn.tripadvisor.com/media/photo-i/19/7a/ee/2d/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 205,
                      height: 205,
                      url: "https://media-cdn.tripadvisor.com/media/photo-f/19/7a/ee/2d/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 450,
                      height: 450,
                      url: "https://media-cdn.tripadvisor.com/media/photo-s/19/7a/ee/2d/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 550,
                      height: 550,
                      url: "https://media-cdn.tripadvisor.com/media/photo-p/19/7a/ee/2d/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 1024,
                      height: 1024,
                      url: "https://media-cdn.tripadvisor.com/media/photo-w/19/7a/ee/2d/enjoy-our-pizza-with.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 1280,
                      height: 1280,
                      url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/7a/ee/2d/enjoy-our-pizza-with.jpg",
                    },
                  ],
                },
              },
              {
                __typename: "AppPresentation_Media",
                data: {
                  __typename: "Media_PhotoResult",
                  id: 622406746,
                  caption: "",
                  publishedDateTime: "2022-08-05T06:37:06.697Z",
                  thumbsUpVotes: 0,
                  uploadDateTime: "2022-08-05T06:37:06.697Z",
                  attribution: {
                    __typename: "Media_Attribution",
                    text: "Traveler photo submitted by bryanpainting",
                  },
                  photoSizeDynamic: {
                    __typename: "Media_PhotoResultSizeDynamic",
                    maxHeight: 1920,
                    maxWidth: 2560,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/19/2c/5a/pizza-4p-s-nha-trang.jpg?w={width}&h={height}&s=1",
                  },
                  sizes: [
                    {
                      __typename: "Media_MediaSize",
                      width: 0,
                      height: 0,
                      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/19/2c/5a/pizza-4p-s-nha-trang.jpg?w=100&h=100&s=1",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 50,
                      height: 50,
                      url: "https://media-cdn.tripadvisor.com/media/photo-t/25/19/2c/5a/pizza-4p-s-nha-trang.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 150,
                      height: 150,
                      url: "https://media-cdn.tripadvisor.com/media/photo-l/25/19/2c/5a/pizza-4p-s-nha-trang.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 180,
                      height: 200,
                      url: "https://media-cdn.tripadvisor.com/media/photo-i/25/19/2c/5a/pizza-4p-s-nha-trang.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 250,
                      height: 188,
                      url: "https://media-cdn.tripadvisor.com/media/photo-f/25/19/2c/5a/pizza-4p-s-nha-trang.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 550,
                      height: 413,
                      url: "https://media-cdn.tripadvisor.com/media/photo-s/25/19/2c/5a/pizza-4p-s-nha-trang.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 1024,
                      height: 768,
                      url: "https://media-cdn.tripadvisor.com/media/photo-w/25/19/2c/5a/pizza-4p-s-nha-trang.jpg",
                    },
                    {
                      __typename: "Media_MediaSize",
                      width: 1280,
                      height: 960,
                      url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/25/19/2c/5a/pizza-4p-s-nha-trang.jpg",
                    },
                  ],
                },
              },
            ],
            heroContent: [
              {
                __typename: "AppPresentation_Media",
              },
              {
                __typename: "AppPresentation_Media",
              },
              {
                __typename: "AppPresentation_Media",
              },
              {
                __typename: "AppPresentation_Media",
              },
              {
                __typename: "AppPresentation_Media",
              },
              {
                __typename: "AppPresentation_Media",
              },
              {
                __typename: "AppPresentation_Media",
              },
              {
                __typename: "AppPresentation_Media",
              },
              {
                __typename: "AppPresentation_Media",
              },
              {
                __typename: "AppPresentation_Media",
              },
            ],
            labels: [],
            clusterId: "HERO_MEDIA",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection",
            spacing: "spacing-03",
            clusterId: null,
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_PoiOverview",
            locationId: {
              __typename: "AppPresentation_LocationId",
              id: "58dcec40-99dd-4420-851c-75d9aa007e0a",
              placeType: "restaurant",
            },
            trackingTitle: "RestaurantOverviewSection",
            trackingKey:
              '{"br":4.5,"rc":119,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_1","pt":"restaurant","lid":19085668,"sn":"Restaurant_Review"}',
            stableDiffingType: "RestaurantOverviewSection",
            name: "Pizza 4P’s Nha Trang – NT",
            numberReviews: 119,
            labels: null,
            distance: null,
            rankingDetailsV2: {
              __typename: "AppPresentation_HtmlLink",
              text: {
                __typename: "AppPresentation_HtmlString",
                text: "#39 of 513 Restaurants in <a>Nha Trang</a>",
              },
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppList",
                url: "/AppList-g293928-a_contentType.restaurant-zfg10591-a_isList.true.html",
                nonCanonicalUrl:
                  "/AppList-g293928-a_contentType.restaurant-zfg10591-a_isList.true.html",
                typedParams: {
                  __typename: "Routing_AppListParameters",
                  contentType: "restaurant",
                  geoId: 293928,
                  isCollectionView: null,
                  isList: true,
                  isMap: null,
                  isNearby: null,
                  nearLocationId: null,
                  nearLocationType: null,
                  pagee: null,
                  sort: null,
                  sortOrder: null,
                  routingFilters: [
                    {
                      __typename: "Routing_Filters",
                      id: "establishment",
                      value: ["10591"],
                    },
                  ],
                },
              },
              trackingContext: "server_rankingDetails_293928",
            },
            managementCenterRoute: null,
            reviewsLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "PoiReviewList",
                url: "/PoiReviewList-d19085668-a_contentType.restaurant.html",
                nonCanonicalUrl:
                  "/PoiReviewList-d19085668-a_contentType.restaurant.html?geo=293928",
                typedParams: {
                  __typename: "Routing_PoiReviewListParameters",
                  contentType: "restaurant",
                  detailId: 19085668,
                  routingFilters: null,
                  pagee: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: null,
              trackingContext: "server_reviews",
            },
            accessibleTags: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Moderately priced • Italian • Pizza • Gastropub",
            },
            tags: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Italian • Pizza • Gastropub",
            },
            ownerStatus: "VERIFIED",
            rating: 4.5,
            clusterId: null,
            contactLinks: [
              {
                __typename: "AppPresentation_ContactLink",
                clickTrackingUrl: null,
                icon: "internet",
                link: {
                  __typename: "AppPresentation_ExternalLink",
                  externalUrl: "https://pizza4ps.com/location/1433/",
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Visit website",
                    debugValueKey: null,
                  },
                  accessibilityString: null,
                  trackingContext: "server_website",
                },
                linkType: "WEBSITE",
              },
              {
                __typename: "AppPresentation_ContactLink",
                clickTrackingUrl: null,
                icon: "phone",
                link: {
                  __typename: "AppPresentation_ExternalLink",
                  externalUrl: "tel:%2B84%201900%206043",
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Call",
                    debugValueKey: null,
                  },
                  accessibilityString: null,
                  trackingContext: "server_phone",
                },
                linkType: "PHONE",
              },
              {
                __typename: "AppPresentation_ContactLink",
                clickTrackingUrl: null,
                icon: null,
                link: {
                  __typename: "AppPresentation_ExternalLink",
                  externalUrl: "https://pizza4ps.com/menu/pizza/",
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Menu",
                    debugValueKey: null,
                  },
                  accessibilityString: null,
                  trackingContext: "server_menu",
                },
                linkType: "MENU",
              },
              {
                __typename: "AppPresentation_ContactLink",
                clickTrackingUrl: null,
                icon: null,
                link: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppUserReview",
                    url: "/AppUserReview?contentType=restaurant&contentId=19085668&locationId=19085668",
                    nonCanonicalUrl:
                      "/AppUserReview?contentType=restaurant&contentId=19085668&locationId=19085668",
                    typedParams: {
                      __typename: "Routing_AppUserReviewParameters",
                      contentId: "19085668",
                    },
                  },
                  webviewRoute: null,
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Write a review",
                    debugValueKey: null,
                  },
                  accessibilityString: null,
                  trackingContext: "server_writeReview_poi_overview",
                },
                linkType: "WRITE_REVIEW",
              },
            ],
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_1",
            spacing: "spacing-05",
            clusterId: null,
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_PoiHours",
            trackingTitle: "RestaurantOpenHoursSection",
            trackingKey:
              '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_2","lid":19085668,"sn":"Restaurant_Review"}',
            stableDiffingType: "RestaurantOpenHoursSection",
            iconName: "clock",
            showMore: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "PoiOpenHours",
                url: "/PoiOpenHours?contentType=restaurant&contentId=19085668",
                nonCanonicalUrl:
                  "/PoiOpenHours?contentType=restaurant&contentId=19085668",
                typedParams: {
                  __typename: "Routing_PoiOpenHoursParameters",
                  contentId: "19085668",
                  contentType: "restaurant",
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: null,
              trackingContext: "server_fullOpenHours",
            },
            text: {
              __typename: "AppPresentation_LocalizedString",
              string: "Open now",
              debugValueKey: null,
            },
            todaySchedule: [
              {
                __typename: "AppPresentation_LocalizedString",
                string: "11:00 AM - 10:00 PM",
                debugValueKey: null,
              },
            ],
            clusterId: null,
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_2",
            spacing: "spacing-06",
            clusterId: null,
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_PoiAbout",
            trackingTitle: "RestaurantAboutNativeSection",
            trackingKey:
              '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_3","lid":19085668,"sn":"Restaurant_Review"}',
            stableDiffingType: "RestaurantAboutNativeSection",
            sectionTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "About",
              debugValueKey: null,
            },
            about:
              "An Earth to People restaurant on a mission to make the world smile for peace, one pizza at a time. Earth to People is our commitment to serve safe and fresh foods directly from Mother Earth to you. Located in Ho Chi Minh City, Hanoi, Danang and Nha Trang.",
            nullableContent: [
              {
                __typename: "AppPresentation_CollapsibleTextSubsection",
              },
              {
                __typename: "AppPresentation_SmallTextListSubsection",
                title: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Dietary options",
                  debugValueKey: null,
                },
                icon: null,
                list: [
                  {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Vegetarian Friendly",
                    debugValueKey: null,
                  },
                  {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Vegan Options",
                    debugValueKey: null,
                  },
                ],
              },
              {
                __typename: "AppPresentation_SmallTextListSubsection",
                title: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Cuisines",
                  debugValueKey: null,
                },
                icon: null,
                list: [
                  {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Italian",
                    debugValueKey: null,
                  },
                  {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Pizza",
                    debugValueKey: null,
                  },
                  {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Gastropub",
                    debugValueKey: null,
                  },
                  {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Salvadoran",
                    debugValueKey: null,
                  },
                  {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Israeli",
                    debugValueKey: null,
                  },
                ],
              },
            ],
            showMore: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "PoiAbout",
                url: "/PoiAbout?contentType=restaurant&contentId=19085668",
                nonCanonicalUrl:
                  "/PoiAbout?contentType=restaurant&contentId=19085668",
                typedParams: {
                  __typename: "Routing_PoiAboutParameters",
                  contentId: "19085668",
                  contentType: "restaurant",
                },
              },
              webviewRoute: null,
              text: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details",
                debugValueKey: null,
              },
              accessibilityString: null,
              trackingContext: "server_showMore",
            },
            tagsSubsection: null,
            clusterId: null,
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_AD_PLACEHOLDER_NATIVE",
            spacing: "spacing-05",
            clusterId: "AD_PLACEHOLDER_NATIVE",
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_AdPlaceholderNative",
            trackingTitle: "AdPlaceholder_NATIVE",
            trackingKey:
              '{"adt":"NATIVE","ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_4","sn":"Restaurant_Review"}',
            stableDiffingType: "AdPlaceholder_NATIVE",
            clusterId: "AD_PLACEHOLDER_NATIVE",
            adUnitId: "/5349/ta.ta.com.s/as.vietnam.khanh_hoa.nha_trang",
            adSizes: ["FLUID", "_300x250"],
            targetingParams: [
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "country",
                values: ["293921"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "detail",
                values: ["19085668"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "geo",
                values: ["293928"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "geo_ctx",
                values: [
                  "11929",
                  "11933",
                  "12028",
                  "12036",
                  "21827",
                  "21840",
                  "21856",
                ],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "hname",
                values: ["Pizza_4P_s_Nha_Trang_NT"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "loctype",
                values: ["restaurants"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "PageType",
                values: ["Restaurant_Review"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "platform",
                values: ["mobile_app"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "rd",
                values: ["com"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "region",
                values: ["1184689"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "cuisine",
                values: [
                  "Italian",
                  "Pizza",
                  "Gastropub",
                  "Salvadoran",
                  "Israeli",
                ],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "pos",
                values: ["inline1"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "fluidType",
                values: ["mobile"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "correlator",
                values: ["7254230461993429"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "sess",
                values: ["181D00CE4285473C8671263040848B1D"],
              },
            ],
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_3",
            spacing: "spacing-08",
            clusterId: null,
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_PoiLocation",
            trackingTitle: "RestaurantAreaSection",
            trackingKey:
              '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_5","lid":19085668,"sn":"Restaurant_Review"}',
            stableDiffingType: "RestaurantAreaSection",
            sectionTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "The area",
              debugValueKey: null,
            },
            address: {
              __typename: "AppPresentation_PoiAddress",
              address:
                "26-28 Trần Phú Street Sheraton hotel Nha Trang, Nha Trang 650000 Vietnam",
            },
            distance: null,
            showMore: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "PoiArea",
                url: "/PoiArea?contentType=restaurant&contentId=58dcec40-99dd-4420-851c-75d9aa007e0a",
                nonCanonicalUrl:
                  "/PoiArea?contentType=restaurant&contentId=58dcec40-99dd-4420-851c-75d9aa007e0a",
                typedParams: {
                  __typename: "Routing_PoiAreaParameters",
                  contentId: "58dcec40-99dd-4420-851c-75d9aa007e0a",
                  contentType: "restaurant",
                  geoId: null,
                  routingFilters: null,
                },
              },
            },
            neighborhood: null,
            gettingThere: {
              __typename: "AppPresentation_NearbyTransport",
              sectionTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "How to get there",
                debugValueKey: null,
              },
              transportItems: [
                {
                  __typename: "AppPresentation_NearbyTransportItem",
                  transitAndTravel: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Cam Rahn Airport • 18 mi",
                    debugValueKey: null,
                  },
                },
              ],
            },
            clusterId: null,
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_4",
            spacing: "spacing-03",
            clusterId: null,
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_StaticMapSection",
            clusterId: null,
            trackingKey:
              '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_6","mt":"BEST_NEARBY_STATIC","sn":"Restaurant_Review"}',
            trackingTitle: "StaticMapNearbyPoiSection",
            stableDiffingType: "StaticMapNearbyPoiSection",
            anchor: {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_6_10","sn":"Restaurant_Review"}',
              trackingTitle:
                "StaticMapPinCard_restaurant_58dcec40-99dd-4420-851c-75d9aa007e0a",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "19085668",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.246181,
                longitude: 109.19622,
              },
              fallbackIcon: "RESTAURANT",
            },
            center: {
              __typename: "AppPresentation_GeoPoint",
              latitude: 12.246181,
              longitude: 109.19622,
            },
            pins: [
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_6_0","sn":"Restaurant_Review"}',
                trackingTitle: "StaticMapPinCard_attraction_7245662",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "attractions",
                  name: "attractions-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "7245662",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 12.24779,
                  longitude: 109.19592,
                },
                fallbackIcon: "ATTRACTION",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_6_1","sn":"Restaurant_Review"}',
                trackingTitle:
                  "StaticMapPinCard_restaurant_8886823f-dd9c-4c55-9c7c-6af263a2db22",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "1803465",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 12.246138,
                  longitude: 109.19618,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_6_2","sn":"Restaurant_Review"}',
                trackingTitle: "StaticMapPinCard_attraction_21273914",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "attractions",
                  name: "attractions-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "21273914",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 12.247677,
                  longitude: 109.194885,
                },
                fallbackIcon: "ATTRACTION",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_6_3","sn":"Restaurant_Review"}',
                trackingTitle:
                  "StaticMapPinCard_restaurant_aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2233968",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 12.246428,
                  longitude: 109.196106,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_6_4","sn":"Restaurant_Review"}',
                trackingTitle: "StaticMapPinCard_attraction_8472618",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "attractions",
                  name: "attractions-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "8472618",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 12.241463,
                  longitude: 109.194885,
                },
                fallbackIcon: "ATTRACTION",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_6_5","sn":"Restaurant_Review"}',
                trackingTitle:
                  "StaticMapPinCard_restaurant_a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "1803467",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 12.246492,
                  longitude: 109.19573,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_6_6","sn":"Restaurant_Review"}',
                trackingTitle: "StaticMapPinCard_attraction_2227712",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "attractions",
                  name: "attractions-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2227712",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 12.25062,
                  longitude: 109.1963,
                },
                fallbackIcon: "ATTRACTION",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_6_7","sn":"Restaurant_Review"}',
                trackingTitle:
                  "StaticMapPinCard_restaurant_17998258-0a82-4fbe-9133-1a58ea9eb066",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "8536569",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 12.243409,
                  longitude: 109.19622,
                },
                fallbackIcon: "RESTAURANT",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_6_8","sn":"Restaurant_Review"}',
                trackingTitle: "StaticMapPinCard_attraction_12432505",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "attractions",
                  name: "attractions-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "12432505",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 12.243251,
                  longitude: 109.19588,
                },
                fallbackIcon: "ATTRACTION",
              },
              {
                __typename: "AppPresentation_MapPin",
                trackingKey:
                  '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_6_9","sn":"Restaurant_Review"}',
                trackingTitle:
                  "StaticMapPinCard_restaurant_0a38f9c4-2224-4312-aee1-6e1a164eb8d3",
                icon: {
                  __typename: "AppPresentation_MapPinIcon",
                  activeName: "restaurants",
                  name: "restaurants-fill",
                },
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "13359210",
                  type: "location",
                },
                geoPoint: {
                  __typename: "AppPresentation_GeoPoint",
                  latitude: 12.243161,
                  longitude: 109.19664,
                },
                fallbackIcon: "RESTAURANT",
              },
            ],
            route: {
              __typename: "Routing_Route",
              fragment: null,
              page: "PoiArea",
              url: "/PoiArea?contentType=restaurant&contentId=58dcec40-99dd-4420-851c-75d9aa007e0a",
              nonCanonicalUrl:
                "/PoiArea?contentType=restaurant&contentId=58dcec40-99dd-4420-851c-75d9aa007e0a",
              typedParams: {
                __typename: "Routing_PoiAreaParameters",
                contentId: "58dcec40-99dd-4420-851c-75d9aa007e0a",
                contentType: "restaurant",
                geoId: null,
                routingFilters: null,
              },
            },
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_5",
            spacing: "spacing-04",
            clusterId: null,
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_PoiNearbyLocations",
            trackingTitle: "NearbyRestaurantsXSellNativeSection",
            trackingKey:
              '{"st":"POI_NEARBY","ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_7","lid":"58dcec40-99dd-4420-851c-75d9aa007e0a","spt":"restaurant","sn":"Restaurant_Review"}',
            stableDiffingType: "NearbyRestaurantsXSellNativeSection",
            tooltip: null,
            sectionTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "Restaurants nearby",
              debugValueKey: null,
            },
            nonNullContent: [
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyRestaurantXSellCard_restaurant_8886823f-dd9c-4c55-9c7c-6af263a2db22",
                trackingKey:
                  '{"br":5.0,"rc":752,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_7_0","ctt":"LOCATION","pt":"restaurant","lid":1803465,"pir":1,"mid":622864356,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "NearbyRestaurantXSellCard_restaurant_8886823f-dd9c-4c55-9c7c-6af263a2db22",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "752",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Feast",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=8886823f-dd9c-4c55-9c7c-6af263a2db22",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=8886823f-dd9c-4c55-9c7c-6af263a2db22",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "8886823f-dd9c-4c55-9c7c-6af263a2db22",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Feast",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "6.3 m",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1365,
                    maxWidth: 2048,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/20/27/e4/weekend-seafood-buffet.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Seafood • International • Asian",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyRestaurantXSellCard_restaurant_aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                trackingKey:
                  '{"br":4.5,"rc":792,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_7_1","ctt":"LOCATION","pt":"restaurant","lid":2233968,"pir":2,"mid":354984055,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "NearbyRestaurantXSellCard_restaurant_aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "792",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Altitude Rooftop Bar",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Altitude Rooftop Bar",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "30 m",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 595,
                    maxWidth: 1137,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/28/a0/77/sunset.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Bar • European • Gastropub",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyRestaurantXSellCard_restaurant_a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                trackingKey:
                  '{"br":4.5,"rc":441,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_7_2","ctt":"LOCATION","pt":"restaurant","lid":1803467,"pir":5,"mid":409857124,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "NearbyRestaurantXSellCard_restaurant_a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "441",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Steam n' Spice",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Steam n' Spice",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "63 m",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1638,
                    maxWidth: 2458,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/6d/ec/64/sns-dinner.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Hong Kong • Vegetarian Friendly • Vegan Options",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyRestaurantXSellCard_restaurant_17998258-0a82-4fbe-9133-1a58ea9eb066",
                trackingKey:
                  '{"br":4.5,"rc":2800,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_7_3","ctt":"LOCATION","pt":"restaurant","lid":8536569,"pir":6,"mid":196174187,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "NearbyRestaurantXSellCard_restaurant_17998258-0a82-4fbe-9133-1a58ea9eb066",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "2,800",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Skylight Nha Trang",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=17998258-0a82-4fbe-9133-1a58ea9eb066",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=17998258-0a82-4fbe-9133-1a58ea9eb066",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "17998258-0a82-4fbe-9133-1a58ea9eb066",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Skylight Nha Trang",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.3 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1349,
                    maxWidth: 1800,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/b1/61/6b/360-of-nha-trang.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Seafood • International • Fusion",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyRestaurantXSellCard_restaurant_0a38f9c4-2224-4312-aee1-6e1a164eb8d3",
                trackingKey:
                  '{"br":4.5,"rc":276,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_7_4","ctt":"LOCATION","pt":"restaurant","lid":13359210,"pir":21,"mid":307271837,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "NearbyRestaurantXSellCard_restaurant_0a38f9c4-2224-4312-aee1-6e1a164eb8d3",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "276",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Akira Sushi",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=0a38f9c4-2224-4312-aee1-6e1a164eb8d3",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=0a38f9c4-2224-4312-aee1-6e1a164eb8d3",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "0a38f9c4-2224-4312-aee1-6e1a164eb8d3",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Akira Sushi",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.3 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1331,
                    maxWidth: 2000,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/50/98/9d/akira-sushi-the-most.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Japanese • Seafood • Sushi",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyRestaurantXSellCard_restaurant_2728e3c3-111d-413d-98a0-32f667d331d7",
                trackingKey:
                  '{"br":4.5,"rc":330,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_7_5","ctt":"LOCATION","pt":"restaurant","lid":6979336,"pir":23,"mid":277112395,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "NearbyRestaurantXSellCard_restaurant_2728e3c3-111d-413d-98a0-32f667d331d7",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "330",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Cookbook Cafe",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=2728e3c3-111d-413d-98a0-32f667d331d7",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=2728e3c3-111d-413d-98a0-32f667d331d7",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "2728e3c3-111d-413d-98a0-32f667d331d7",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Cookbook Cafe",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.2 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1333,
                    maxWidth: 2000,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/84/66/4b/the-dessert-section-for.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$$$ • Seafood • International • European",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyRestaurantXSellCard_restaurant_c12cdd2b-be09-4eba-9277-129bebb15c59",
                trackingKey:
                  '{"br":5.0,"rc":518,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_7_6","ctt":"LOCATION","pt":"restaurant","lid":1803466,"pir":29,"mid":434844535,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "NearbyRestaurantXSellCard_restaurant_c12cdd2b-be09-4eba-9277-129bebb15c59",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "518",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "& More by Sheraton",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=c12cdd2b-be09-4eba-9277-129bebb15c59",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=c12cdd2b-be09-4eba-9277-129bebb15c59",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "c12cdd2b-be09-4eba-9277-129bebb15c59",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for & More by Sheraton",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "25 m",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 922,
                    maxWidth: 1382,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/eb/33/77/bac-xiu.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Bar • Cafe • International",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyRestaurantXSellCard_restaurant_6bf3bc91-13e3-49e4-ba70-acc9de144d19",
                trackingKey:
                  '{"br":4.5,"rc":1089,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_7_7","ctt":"LOCATION","pt":"restaurant","lid":8624662,"pir":9,"mid":258293995,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "NearbyRestaurantXSellCard_restaurant_6bf3bc91-13e3-49e4-ba70-acc9de144d19",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "1,089",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Alpaca Homestyle Cafe",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=6bf3bc91-13e3-49e4-ba70-acc9de144d19",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=6bf3bc91-13e3-49e4-ba70-acc9de144d19",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "6bf3bc91-13e3-49e4-ba70-acc9de144d19",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Alpaca Homestyle Cafe",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.7 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1536,
                    maxWidth: 2048,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/65/40/eb/photo0jpg.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Cafe • European • Healthy",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyRestaurantXSellCard_restaurant_18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
                trackingKey:
                  '{"br":4.0,"rc":371,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_7_8","ctt":"LOCATION","pt":"restaurant","lid":7228037,"pir":46,"mid":118398120,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "NearbyRestaurantXSellCard_restaurant_18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "371",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Costa Seafood Restaurant",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Costa Seafood Restaurant",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.2 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 533,
                    maxWidth: 800,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/0e/9c/a8/costa-seafood-restaurant.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Seafood • Asian • Fusion",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyRestaurantXSellCard_restaurant_415e1fad-35b9-4893-8470-4021d1cbd5a6",
                trackingKey:
                  '{"br":5.0,"rc":41,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_7_9","ctt":"LOCATION","pt":"restaurant","lid":17750791,"pir":52,"mid":432794900,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "NearbyRestaurantXSellCard_restaurant_415e1fad-35b9-4893-8470-4021d1cbd5a6",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "41",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Costa Robata Nha Trang - Japanese restaurant",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=415e1fad-35b9-4893-8470-4021d1cbd5a6",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=415e1fad-35b9-4893-8470-4021d1cbd5a6",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "415e1fad-35b9-4893-8470-4021d1cbd5a6",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string:
                      "View details for Costa Robata Nha Trang - Japanese restaurant",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.2 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 2410,
                    maxWidth: 3615,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/cb/ed/14/take-delight-in-our-exclusive.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Japanese • Brew Pub • Seafood",
                },
              },
            ],
            clusterId: null,
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_6",
            spacing: "spacing-02",
            clusterId: null,
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_PoiNearbyLocations",
            trackingTitle: "NearbyAttractionsXSellNativeSection",
            trackingKey:
              '{"st":"POI_NEARBY","ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_8","lid":"58dcec40-99dd-4420-851c-75d9aa007e0a","spt":"attraction","sn":"Restaurant_Review"}',
            stableDiffingType: "NearbyAttractionsXSellNativeSection",
            tooltip: null,
            sectionTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "Attractions nearby",
              debugValueKey: null,
            },
            nonNullContent: [
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyAttractionXSellCard_attraction_7245662",
                trackingKey:
                  '{"br":3.5,"rc":347,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_8_0","ctt":"LOCATION","pt":"attraction","lid":7245662,"pir":26,"mid":127793559,"sn":"Restaurant_Review"}',
                trackingTitle: "NearbyAttractionXSellCard_attraction_7245662",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 3.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "347",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Nha Trang Center",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=attraction&contentId=7245662",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=attraction&contentId=7245662",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "7245662",
                      contentType: "attraction",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Nha Trang Center",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.2 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 600,
                    maxWidth: 799,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/9d/f9/97/nha-trang-center.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Shopping Malls",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyAttractionXSellCard_attraction_21273914",
                trackingKey:
                  '{"br":5.0,"rc":1,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_8_1","ctt":"LOCATION","pt":"attraction","lid":21273914,"pir":59,"mid":473108599,"sn":"Restaurant_Review"}',
                trackingTitle: "NearbyAttractionXSellCard_attraction_21273914",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "1",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Gold Coast Mall",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=attraction&contentId=21273914",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=attraction&contentId=21273914",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "21273914",
                      contentType: "attraction",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Gold Coast Mall",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.2 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1706,
                    maxWidth: 2560,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/33/10/77/gold-coast-mall-exterior.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Shopping Malls",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyAttractionXSellCard_attraction_8472618",
                trackingKey:
                  '{"br":4.5,"rc":1660,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_8_2","ctt":"LOCATION","pt":"attraction","lid":8472618,"pir":1,"mid":243686153,"sn":"Restaurant_Review"}',
                trackingTitle: "NearbyAttractionXSellCard_attraction_8472618",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "1,660",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Russian Information Center",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=attraction&contentId=8472618",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=attraction&contentId=8472618",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "8472618",
                      contentType: "attraction",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Russian Information Center",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.5 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 556,
                    maxWidth: 737,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/86/5b/09/caption.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Visitor Centers",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyAttractionXSellCard_attraction_2227712",
                trackingKey:
                  '{"br":4.0,"rc":4655,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_8_3","ctt":"LOCATION","pt":"attraction","lid":2227712,"pir":15,"mid":139994722,"sn":"Restaurant_Review"}',
                trackingTitle: "NearbyAttractionXSellCard_attraction_2227712",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "4,655",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Nha Trang Beach",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=attraction&contentId=2227712",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=attraction&contentId=2227712",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "2227712",
                      contentType: "attraction",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Nha Trang Beach",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.5 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 636,
                    maxWidth: 960,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/58/26/62/photo0jpg.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Beaches",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyAttractionXSellCard_attraction_12432505",
                trackingKey:
                  '{"br":3.0,"rc":6,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_8_4","ctt":"LOCATION","pt":"attraction","lid":12432505,"pir":65,"mid":256016561,"sn":"Restaurant_Review"}',
                trackingTitle: "NearbyAttractionXSellCard_attraction_12432505",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 3,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "6",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Imperial Havana Club Nha Trang",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=attraction&contentId=12432505",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=attraction&contentId=12432505",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "12432505",
                      contentType: "attraction",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Imperial Havana Club Nha Trang",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.3 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 266,
                    maxWidth: 320,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/42/80/b1/getlstd-property-photo.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Casinos",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyAttractionXSellCard_attraction_15850651",
                trackingKey:
                  '{"br":4.0,"rc":19,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_8_5","ctt":"LOCATION","pt":"attraction","lid":15850651,"pir":36,"mid":374253596,"sn":"Restaurant_Review"}',
                trackingTitle: "NearbyAttractionXSellCard_attraction_15850651",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "19",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Happy Beach",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=attraction&contentId=15850651",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=attraction&contentId=15850651",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "15850651",
                      contentType: "attraction",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Happy Beach",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.4 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 504,
                    maxWidth: 960,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/4e/a8/1c/v-tri-happy-beach.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Beach & Pool Clubs",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyAttractionXSellCard_attraction_451109",
                trackingKey:
                  '{"br":4.0,"rc":156,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_8_6","ctt":"LOCATION","pt":"attraction","lid":451109,"pir":17,"mid":325534765,"sn":"Restaurant_Review"}',
                trackingTitle: "NearbyAttractionXSellCard_attraction_451109",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "156",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Alexandre Yersin Museum",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=attraction&contentId=451109",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=attraction&contentId=451109",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "451109",
                      contentType: "attraction",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Alexandre Yersin Museum",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.5 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1080,
                    maxWidth: 1080,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/67/44/2d/img-20180615-182217-183.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Speciality Museums",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyAttractionXSellCard_attraction_9990046",
                trackingKey:
                  '{"br":3.5,"rc":289,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_8_7","ctt":"LOCATION","pt":"attraction","lid":9990046,"pir":23,"mid":245307759,"sn":"Restaurant_Review"}',
                trackingTitle: "NearbyAttractionXSellCard_attraction_9990046",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 3.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "289",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Thap Tram Huong",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=attraction&contentId=9990046",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=attraction&contentId=9990046",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "9990046",
                      contentType: "attraction",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Thap Tram Huong",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.5 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1333,
                    maxWidth: 2000,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/9f/19/6f/caption.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Points of Interest & Landmarks • Observation Decks & Towers",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyAttractionXSellCard_attraction_14440713",
                trackingKey:
                  '{"br":3.5,"rc":39,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_8_8","ctt":"LOCATION","pt":"attraction","lid":14440713,"pir":34,"mid":376808184,"sn":"Restaurant_Review"}',
                trackingTitle: "NearbyAttractionXSellCard_attraction_14440713",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 3.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "39",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Vincom Plaza Nha Trang",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=attraction&contentId=14440713",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=attraction&contentId=14440713",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "14440713",
                      contentType: "attraction",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Vincom Plaza Nha Trang",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.4 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 2920,
                    maxWidth: 3894,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/75/a2/f8/caption.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Shopping Malls",
                },
              },
              {
                __typename:
                  "AppPresentation_HorizontalMinimalCardWithBackground",
                stableDiffingType:
                  "NearbyAttractionXSellCard_attraction_6983678",
                trackingKey:
                  '{"br":4.0,"rc":358,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_8_9","ctt":"LOCATION","pt":"attraction","lid":6983678,"pir":7,"mid":188048649,"sn":"Restaurant_Review"}',
                trackingTitle: "NearbyAttractionXSellCard_attraction_6983678",
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "358",
                    debugValueKey: null,
                  },
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Long Beach",
                  debugValueKey: null,
                },
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=attraction&contentId=6983678",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=attraction&contentId=6983678",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "6983678",
                      contentType: "attraction",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Long Beach",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
                distance: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "0.8 km",
                  debugValueKey: null,
                },
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1123,
                    maxWidth: 2000,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/35/65/09/caption.jpg?w={width}&h={height}&s=1",
                  },
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Beaches",
                },
              },
            ],
            clusterId: null,
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_7",
            spacing: "spacing-08",
            clusterId: null,
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_PoiContribute",
            clusterId: null,
            photoCTA: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppUploadAPhoto",
                url: "/AppUploadAPhoto?contentType=restaurant&contentId=19085668&locationId=19085668",
                nonCanonicalUrl:
                  "/AppUploadAPhoto?contentType=restaurant&contentId=19085668&locationId=19085668",
                typedParams: {
                  __typename: "Routing_AppUploadAPhotoParameters",
                  contentId: "19085668",
                },
              },
              webviewRoute: null,
              text: {
                __typename: "AppPresentation_LocalizedString",
                string: "Upload a photo",
                debugValueKey: null,
              },
              accessibilityString: null,
              trackingContext: "server_uploadAPhoto_contribute",
            },
            reviewCTA: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppUserReview",
                url: "/AppUserReview?contentType=restaurant&contentId=19085668&locationId=19085668",
                nonCanonicalUrl:
                  "/AppUserReview?contentType=restaurant&contentId=19085668&locationId=19085668",
                typedParams: {
                  __typename: "Routing_AppUserReviewParameters",
                  contentId: "19085668",
                },
              },
              webviewRoute: null,
              text: {
                __typename: "AppPresentation_LocalizedString",
                string: "Write a review",
                debugValueKey: null,
              },
              accessibilityString: null,
              trackingContext: "server_writeReview_contribute",
            },
            sectionTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "Contribute",
              debugValueKey: null,
            },
            sectionType: "PoiContribute",
            stableDiffingType: "ContributeSection",
            trackingKey:
              '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_9","lid":19085668,"sn":"Restaurant_Review"}',
            trackingTitle: "ContributeSection",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_8",
            spacing: "spacing-08",
            clusterId: null,
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_PoiReviewsAndQA",
            trackingTitle: "ReviewsAndQANativeSection",
            trackingKey:
              '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_10","lid":19085668,"sn":"Restaurant_Review"}',
            stableDiffingType: "ReviewsAndQANativeSection",
            clusterId: "POI_REVIEWS",
            tabs: [
              {
                __typename: "AppPresentation_Tab",
                initialTab: true,
                seeMore: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "PoiReviewList",
                    url: "/PoiReviewList-d19085668-a_contentType.restaurant.html",
                    nonCanonicalUrl:
                      "/PoiReviewList-d19085668-a_contentType.restaurant.html?geo=293928",
                    typedParams: {
                      __typename: "Routing_PoiReviewListParameters",
                      contentType: "restaurant",
                      detailId: 19085668,
                      routingFilters: null,
                      pagee: null,
                    },
                  },
                  webviewRoute: null,
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View 72 reviews",
                    debugValueKey: null,
                  },
                  accessibilityString: null,
                  trackingContext: "server_ViewAllReviews_seeMore",
                },
                seeMoreV2: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "PoiReviewList",
                    url: "/PoiReviewList-d19085668-a_contentType.restaurant.html",
                    nonCanonicalUrl:
                      "/PoiReviewList-d19085668-a_contentType.restaurant.html?geo=293928",
                    typedParams: {
                      __typename: "Routing_PoiReviewListParameters",
                      contentType: "restaurant",
                      detailId: 19085668,
                      routingFilters: null,
                      pagee: null,
                    },
                  },
                  webviewRoute: null,
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View 72 reviews",
                    debugValueKey: null,
                  },
                  accessibilityString: null,
                  trackingContext: "server_ViewAllReviews_seeMoreV2",
                },
                searchLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "PoiReviewList",
                    url: "/PoiReviewList-d19085668-a_contentType.restaurant.html",
                    nonCanonicalUrl:
                      "/PoiReviewList-d19085668-a_contentType.restaurant.html?geo=293928",
                    typedParams: {
                      __typename: "Routing_PoiReviewListParameters",
                      contentType: "restaurant",
                      detailId: 19085668,
                      routingFilters: null,
                      pagee: null,
                    },
                  },
                  webviewRoute: null,
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View 72 reviews",
                    debugValueKey: null,
                  },
                  accessibilityString: null,
                  trackingContext: "server_ViewAllReviews_searchLink",
                },
                tabTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Reviews",
                  debugValueKey: null,
                },
                tabSearchHint: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Search reviews...",
                  debugValueKey: null,
                },
                content: [
                  {
                    __typename: "AppPresentation_ReviewsHeaderCard",
                    filters: {
                      __typename: "AppPresentation_FilterResponse",
                      showAllText: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Show reviews",
                        debugValueKey: null,
                      },
                      availableFilterGroups: [
                        {
                          __typename: "AppPresentation_StandardFilterGroup",
                          name: "Filters",
                          groupType: "StandardFilterGroup",
                          tooltip: null,
                          filters: [
                            {
                              __typename: "AppPresentation_MultiValueFilter",
                              trackingKey:
                                '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_reviewFilterGroups_0_0","lid":19085668,"fn":"rating","sn":"Restaurant_Review"}',
                              trackingTitle: "APSMultiValueFilter_rating",
                              title: "Traveler rating",
                              name: "rating",
                              surfaces: [],
                              tooltip: null,
                              values: [
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: 3,
                                  value: "1",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_BubbleRatingFilterValue",
                                    minimumRatingValue: 10,
                                  },
                                  selectedAccessibilityString: null,
                                  unselectedAccessibilityString: null,
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: 3,
                                  value: "2",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_BubbleRatingFilterValue",
                                    minimumRatingValue: 20,
                                  },
                                  selectedAccessibilityString: null,
                                  unselectedAccessibilityString: null,
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: 6,
                                  value: "3",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_BubbleRatingFilterValue",
                                    minimumRatingValue: 30,
                                  },
                                  selectedAccessibilityString: null,
                                  unselectedAccessibilityString: null,
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: 13,
                                  value: "4",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_BubbleRatingFilterValue",
                                    minimumRatingValue: 40,
                                  },
                                  selectedAccessibilityString: null,
                                  unselectedAccessibilityString: null,
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: 94,
                                  value: "5",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_BubbleRatingFilterValue",
                                    minimumRatingValue: 50,
                                  },
                                  selectedAccessibilityString: null,
                                  unselectedAccessibilityString: null,
                                  tooltip: null,
                                },
                              ],
                            },
                            {
                              __typename:
                                "AppPresentation_EnumeratedValueFilter",
                              trackingKey:
                                '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_reviewFilterGroups_0_1","lid":19085668,"fn":"since","sn":"Restaurant_Review"}',
                              trackingTitle: "APSEnumeratedValueFilter_since",
                              name: "since",
                              surfaces: [],
                              title: "Review date",
                              tooltip: null,
                              values: [
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "All reviews",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: All reviews",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: All reviews",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "2022-07-17",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "Last 3 months",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: Last 3 months",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: Last 3 months",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "2022-04-17",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "Last 6 months",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: Last 6 months",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: Last 6 months",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "2021-10-17",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "Last 12 months",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: Last 12 months",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: Last 12 months",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                              ],
                            },
                            {
                              __typename: "AppPresentation_MultiValueFilter",
                              trackingKey:
                                '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_reviewFilterGroups_0_2","lid":19085668,"fn":"months","sn":"Restaurant_Review"}',
                              trackingTitle: "APSMultiValueFilter_months",
                              title: "Time of year",
                              name: "months",
                              surfaces: [],
                              tooltip: null,
                              values: [
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "1",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "January",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: January",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: January",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "2",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "February",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: February",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: February",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "3",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "March",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: March",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: March",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "4",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "April",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: April",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: April",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "5",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "May",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: May",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: May",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "6",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "June",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: June",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: June",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "7",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "July",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: July",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: July",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "8",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "August",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: August",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: August",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "9",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "September",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: September",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: September",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "10",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "October",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: October",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: October",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "11",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "November",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: November",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: November",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "12",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "December",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: December",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: December",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                              ],
                            },
                            {
                              __typename: "AppPresentation_MultiValueFilter",
                              trackingKey:
                                '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_reviewFilterGroups_0_3","lid":19085668,"fn":"type","sn":"Restaurant_Review"}',
                              trackingTitle: "APSMultiValueFilter_type",
                              title: "Type of visit",
                              name: "type",
                              surfaces: [],
                              tooltip: null,
                              values: [
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "Business",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "Business",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: Business",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: Business",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "Couples",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "Couples",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: Couples",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: Couples",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "Family",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "Family",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: Family",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: Family",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "Friends",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "Friends",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: Friends",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: Friends",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                                {
                                  __typename:
                                    "AppPresentation_EnumeratedValueWithCount",
                                  count: null,
                                  value: "Solo",
                                  isSelected: false,
                                  object: {
                                    __typename:
                                      "AppPresentation_SimpleTextFilterValue",
                                    text: "Solo",
                                  },
                                  selectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Disable filter: Solo",
                                    debugValueKey: null,
                                  },
                                  unselectedAccessibilityString: {
                                    __typename:
                                      "AppPresentation_LocalizedString",
                                    string: "Enable filter: Solo",
                                    debugValueKey: null,
                                  },
                                  tooltip: null,
                                },
                              ],
                            },
                          ],
                          trackingKey:
                            '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_reviewFilterGroups_0","lid":19085668,"fn":"Filters","sn":"Restaurant_Review"}',
                          trackingTitle: "StandardFilterGroup_reviews",
                        },
                        {
                          __typename: "AppPresentation_SingleSelectFilterGroup",
                          name: "English",
                          groupType: "SingleSelectFilterGroup",
                          tooltip: null,
                          filter: {
                            __typename: "AppPresentation_EnumeratedValueFilter",
                            trackingKey:
                              '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_reviewFilterGroups_1_0","lid":19085668,"fn":"language","sn":"Restaurant_Review"}',
                            trackingTitle: "APSEnumeratedValueFilter_language",
                            name: "language",
                            surfaces: [],
                            title: "Language",
                            tooltip: null,
                            values: [
                              {
                                __typename:
                                  "AppPresentation_EnumeratedValueWithCount",
                                count: 1,
                                value: "de",
                                isSelected: false,
                                object: {
                                  __typename:
                                    "AppPresentation_SimpleTextFilterValue",
                                  text: "German",
                                },
                                selectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Disable filter: German",
                                  debugValueKey: null,
                                },
                                unselectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Enable filter: German",
                                  debugValueKey: null,
                                },
                                tooltip: null,
                              },
                              {
                                __typename:
                                  "AppPresentation_EnumeratedValueWithCount",
                                count: 1,
                                value: "sv",
                                isSelected: false,
                                object: {
                                  __typename:
                                    "AppPresentation_SimpleTextFilterValue",
                                  text: "Swedish",
                                },
                                selectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Disable filter: Swedish",
                                  debugValueKey: null,
                                },
                                unselectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Enable filter: Swedish",
                                  debugValueKey: null,
                                },
                                tooltip: null,
                              },
                              {
                                __typename:
                                  "AppPresentation_EnumeratedValueWithCount",
                                count: 31,
                                value: "vi",
                                isSelected: false,
                                object: {
                                  __typename:
                                    "AppPresentation_SimpleTextFilterValue",
                                  text: "Vietnamese",
                                },
                                selectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Disable filter: Vietnamese",
                                  debugValueKey: null,
                                },
                                unselectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Enable filter: Vietnamese",
                                  debugValueKey: null,
                                },
                                tooltip: null,
                              },
                              {
                                __typename:
                                  "AppPresentation_EnumeratedValueWithCount",
                                count: 8,
                                value: "ru",
                                isSelected: false,
                                object: {
                                  __typename:
                                    "AppPresentation_SimpleTextFilterValue",
                                  text: "Russian",
                                },
                                selectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Disable filter: Russian",
                                  debugValueKey: null,
                                },
                                unselectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Enable filter: Russian",
                                  debugValueKey: null,
                                },
                                tooltip: null,
                              },
                              {
                                __typename:
                                  "AppPresentation_EnumeratedValueWithCount",
                                count: 3,
                                value: "ko",
                                isSelected: false,
                                object: {
                                  __typename:
                                    "AppPresentation_SimpleTextFilterValue",
                                  text: "Korean",
                                },
                                selectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Disable filter: Korean",
                                  debugValueKey: null,
                                },
                                unselectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Enable filter: Korean",
                                  debugValueKey: null,
                                },
                                tooltip: null,
                              },
                              {
                                __typename:
                                  "AppPresentation_EnumeratedValueWithCount",
                                count: 1,
                                value: "ja",
                                isSelected: false,
                                object: {
                                  __typename:
                                    "AppPresentation_SimpleTextFilterValue",
                                  text: "Japanese",
                                },
                                selectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Disable filter: Japanese",
                                  debugValueKey: null,
                                },
                                unselectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Enable filter: Japanese",
                                  debugValueKey: null,
                                },
                                tooltip: null,
                              },
                              {
                                __typename:
                                  "AppPresentation_EnumeratedValueWithCount",
                                count: 72,
                                value: "en",
                                isSelected: true,
                                object: {
                                  __typename:
                                    "AppPresentation_SimpleTextFilterValue",
                                  text: "English",
                                },
                                selectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Disable filter: English",
                                  debugValueKey: null,
                                },
                                unselectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Enable filter: English",
                                  debugValueKey: null,
                                },
                                tooltip: null,
                              },
                              {
                                __typename:
                                  "AppPresentation_EnumeratedValueWithCount",
                                count: 1,
                                value: "it",
                                isSelected: false,
                                object: {
                                  __typename:
                                    "AppPresentation_SimpleTextFilterValue",
                                  text: "Italian",
                                },
                                selectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Disable filter: Italian",
                                  debugValueKey: null,
                                },
                                unselectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Enable filter: Italian",
                                  debugValueKey: null,
                                },
                                tooltip: null,
                              },
                              {
                                __typename:
                                  "AppPresentation_EnumeratedValueWithCount",
                                count: 1,
                                value: "fr",
                                isSelected: false,
                                object: {
                                  __typename:
                                    "AppPresentation_SimpleTextFilterValue",
                                  text: "French",
                                },
                                selectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Disable filter: French",
                                  debugValueKey: null,
                                },
                                unselectedAccessibilityString: {
                                  __typename: "AppPresentation_LocalizedString",
                                  string: "Enable filter: French",
                                  debugValueKey: null,
                                },
                                tooltip: null,
                              },
                            ],
                          },
                          trackingKey:
                            '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_reviewFilterGroups_1","fn":"language","sn":"Restaurant_Review"}',
                          trackingTitle: "SingleSelectFilterGroup_language",
                        },
                      ],
                    },
                    count: 119,
                    keywords: [
                      "pizza",
                      "homemade cheese",
                      "great food and service",
                      "4ps",
                      "waiters",
                      "vietnam",
                      "beach",
                    ],
                    rating: 4.5,
                    ratingFilterId: "rating",
                    searchFilterId: "query",
                    ratingCountsV2: {
                      __typename: "AppPresentation_RatingCountsV2",
                      averageBar: {
                        __typename: "AppPresentation_HistogramBar",
                        isSelected: true,
                        label: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Average",
                          debugValueKey: null,
                        },
                        count: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "6",
                          debugValueKey: null,
                        },
                        percentage: 5,
                      },
                      excellentBar: {
                        __typename: "AppPresentation_HistogramBar",
                        isSelected: true,
                        label: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Excellent",
                          debugValueKey: null,
                        },
                        count: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "94",
                          debugValueKey: null,
                        },
                        percentage: 79,
                      },
                      poorBar: {
                        __typename: "AppPresentation_HistogramBar",
                        isSelected: true,
                        label: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Poor",
                          debugValueKey: null,
                        },
                        count: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "3",
                          debugValueKey: null,
                        },
                        percentage: 3,
                      },
                      terribleBar: {
                        __typename: "AppPresentation_HistogramBar",
                        isSelected: true,
                        label: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Terrible",
                          debugValueKey: null,
                        },
                        count: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "3",
                          debugValueKey: null,
                        },
                        percentage: 3,
                      },
                      veryGoodBar: {
                        __typename: "AppPresentation_HistogramBar",
                        isSelected: true,
                        label: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Very good",
                          debugValueKey: null,
                        },
                        count: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "13",
                          debugValueKey: null,
                        },
                        percentage: 11,
                      },
                    },
                    reviewCountText: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "119 reviews",
                      debugValueKey: null,
                    },
                    reviewCTA: {
                      __typename: "AppPresentation_InternalLink",
                      route: {
                        __typename: "Routing_Route",
                        fragment: null,
                        page: "AppUserReview",
                        url: "/AppUserReview?contentType=restaurant&contentId=19085668&locationId=19085668",
                        nonCanonicalUrl:
                          "/AppUserReview?contentType=restaurant&contentId=19085668&locationId=19085668",
                        typedParams: {
                          __typename: "Routing_AppUserReviewParameters",
                          contentId: "19085668",
                        },
                      },
                      webviewRoute: null,
                      text: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Write a review",
                        debugValueKey: null,
                      },
                      accessibilityString: null,
                      trackingContext: "server_writeReview_header",
                    },
                    photoCTA: {
                      __typename: "AppPresentation_InternalLink",
                      route: {
                        __typename: "Routing_Route",
                        fragment: null,
                        page: "AppUploadAPhoto",
                        url: "/AppUploadAPhoto?contentType=restaurant&contentId=19085668&locationId=19085668",
                        nonCanonicalUrl:
                          "/AppUploadAPhoto?contentType=restaurant&contentId=19085668&locationId=19085668",
                        typedParams: {
                          __typename: "Routing_AppUploadAPhotoParameters",
                          contentId: "19085668",
                        },
                      },
                      webviewRoute: null,
                      text: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Upload a photo",
                        debugValueKey: null,
                      },
                      accessibilityString: null,
                      trackingContext: "server_uploadAPhoto_header",
                    },
                    subRatings: null,
                    tooltip: null,
                    stableDiffingType: "ReviewsHeader",
                  },
                  {
                    __typename: "AppPresentation_ReviewCard",
                    trackingKey:
                      '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_11","lid":19085668,"sn":"Restaurant_Review","rid":852065182}',
                    trackingTitle: "ReviewCard_852065182",
                    stableDiffingType: "ReviewCard_852065182",
                    reviewRating: 5,
                    bubbleRatingText: {
                      __typename: "AppPresentation_JoinedLocalizableObjects",
                      text: "Aug 2022 • Family",
                    },
                    helpfulVote: {
                      __typename: "AppPresentation_HelpfulVote",
                      hasVotedReviewHelpful: false,
                      helpfulVoteAction: {
                        __typename: "AppPresentation_HelpfulVoteAction",
                        objectId: "852065182",
                        objectType: "REVIEW",
                      },
                      helpfulVotes: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "0",
                        debugValueKey: null,
                      },
                    },
                    labels: [],
                    cardLink: null,
                    photos: [
                      {
                        __typename: "AppPresentation_Photo",
                        photoId: 622406746,
                        link: {
                          __typename: "AppPresentation_InternalLink",
                          route: {
                            __typename: "Routing_Route",
                            fragment: null,
                            page: "PhotoDetails",
                            url: "/PhotoDetails?ff=622406746&t=p&locationId=19085668&geo=19085668&cfg=rr&ep=review&rid=852065182",
                            nonCanonicalUrl:
                              "/PhotoDetails?ff=622406746&t=p&locationId=19085668&geo=19085668&cfg=rr&ep=review&rid=852065182",
                            typedParams: {
                              __typename: "Routing_PhotoDetailsParameters",
                              locationIdStr: "19085668",
                              albumId: null,
                              galleryConfig: "rr",
                              mediaId: 622406746,
                              mediaType: "p",
                              to: null,
                              from: null,
                              entryPoint: "review",
                              reviewId: "852065182",
                              positionId: null,
                            },
                          },
                          webviewRoute: null,
                          text: null,
                          accessibilityString: null,
                          trackingContext: "server_reviewPhoto_622406746",
                        },
                        photo: {
                          __typename: "Photo",
                          photoSizeDynamic: {
                            __typename: "PhotoSizeDynamic",
                            maxHeight: 1920,
                            maxWidth: 2560,
                            urlTemplate:
                              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/19/2c/5a/pizza-4p-s-nha-trang.jpg?w={width}&h={height}&s=1",
                          },
                          photoSizes: [
                            {
                              __typename: "PhotoSize",
                              height: 0,
                              width: 0,
                              url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/19/2c/5a/pizza-4p-s-nha-trang.jpg?w=100&h=100&s=1",
                            },
                            {
                              __typename: "PhotoSize",
                              height: 50,
                              width: 50,
                              url: "https://media-cdn.tripadvisor.com/media/photo-t/25/19/2c/5a/pizza-4p-s-nha-trang.jpg",
                            },
                            {
                              __typename: "PhotoSize",
                              height: 150,
                              width: 150,
                              url: "https://media-cdn.tripadvisor.com/media/photo-l/25/19/2c/5a/pizza-4p-s-nha-trang.jpg",
                            },
                            {
                              __typename: "PhotoSize",
                              height: 200,
                              width: 180,
                              url: "https://media-cdn.tripadvisor.com/media/photo-i/25/19/2c/5a/pizza-4p-s-nha-trang.jpg",
                            },
                            {
                              __typename: "PhotoSize",
                              height: 188,
                              width: 250,
                              url: "https://media-cdn.tripadvisor.com/media/photo-f/25/19/2c/5a/pizza-4p-s-nha-trang.jpg",
                            },
                            {
                              __typename: "PhotoSize",
                              height: 413,
                              width: 550,
                              url: "https://media-cdn.tripadvisor.com/media/photo-s/25/19/2c/5a/pizza-4p-s-nha-trang.jpg",
                            },
                            {
                              __typename: "PhotoSize",
                              height: 768,
                              width: 1024,
                              url: "https://media-cdn.tripadvisor.com/media/photo-w/25/19/2c/5a/pizza-4p-s-nha-trang.jpg",
                            },
                            {
                              __typename: "PhotoSize",
                              height: 960,
                              width: 1280,
                              url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/25/19/2c/5a/pizza-4p-s-nha-trang.jpg",
                            },
                          ],
                        },
                      },
                    ],
                    ownerResponse: {
                      __typename: "AppPresentation_OwnerResponse",
                      disclaimer: {
                        __typename: "AppPresentation_LocalizedString",
                        string:
                          "This response is the subjective opinion of the management representative and not of TripAdvisor LLC.",
                        debugValueKey: null,
                      },
                      publishedDate: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Written August 5, 2022",
                        debugValueKey: null,
                      },
                      displayName: "Pizza 4P's",
                      positionAtLocation: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Marketing at Pizza 4P’s Nha Trang – NT",
                        debugValueKey: null,
                      },
                      avatar: {
                        __typename: "AppPresentation_Media",
                        data: {
                          __typename: "Media_PhotoResult",
                          id: 444014634,
                          caption: "Pizza_4Ps",
                          publishedDateTime: "2020-01-02T03:39:55.594Z",
                          thumbsUpVotes: 0,
                          uploadDateTime: "2020-01-02T03:39:55.594Z",
                          attribution: {
                            __typename: "Media_Attribution",
                            text: "Traveler photo submitted by Pizza 4P's",
                          },
                          photoSizeDynamic: {
                            __typename: "Media_PhotoResultSizeDynamic",
                            maxHeight: 600,
                            maxWidth: 600,
                            urlTemplate:
                              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/77/20/2a/pizza-4ps.jpg?w={width}&h={height}&s=1",
                          },
                          sizes: [
                            {
                              __typename: "Media_MediaSize",
                              width: 0,
                              height: 0,
                              url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/77/20/2a/pizza-4ps.jpg?w=100&h=100&s=1",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 50,
                              height: 50,
                              url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 150,
                              height: 150,
                              url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 180,
                              height: 200,
                              url: "https://media-cdn.tripadvisor.com/media/photo-i/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 205,
                              height: 205,
                              url: "https://media-cdn.tripadvisor.com/media/photo-f/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 450,
                              height: 450,
                              url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 550,
                              height: 550,
                              url: "https://media-cdn.tripadvisor.com/media/photo-p/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 600,
                              height: 600,
                              url: "https://media-cdn.tripadvisor.com/media/photo-o/1a/77/20/2a/pizza-4ps.jpg",
                            },
                          ],
                        },
                      },
                      profileLink: null,
                      reportAction: {
                        __typename: "AppPresentation_ReportIAPWebviewAction",
                        actionName: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Report this response",
                          debugValueKey: null,
                        },
                        actionType: "ReportIAPWebviewAction",
                        authenticateUser: true,
                        webUrl: {
                          __typename: "AppPresentation_ExternalLink",
                          externalUrl:
                            "https://www.tripadvisor.com/SocialIapReporting?objectType=OwnerResponse&contentId=852261397&locationId=19085668",
                          text: null,
                          accessibilityString: null,
                          trackingContext:
                            "server_report_OwnerResponse_852261397",
                        },
                      },
                      text: "Dear bryanpainting\n\nWe are really happy that you enjoyed your experience in Pizza 4P's and your feedback means everything to us. As we are always looking for ways to deliver WOW and happiness to our customers every day, your support is a valuable part of that process. We hope to have a chance to welcome you back next time.\nHave a great day 🤗\n\nKind regards.\nPizza 4P's Team.",
                    },
                    reviewActions: [
                      {
                        __typename: "AppPresentation_ShareLinkAction",
                      },
                      {
                        __typename: "AppPresentation_ReportIAPWebviewAction",
                        actionName: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Report this review",
                          debugValueKey: null,
                        },
                        actionType: "ReportIAPWebviewAction",
                        authenticateUser: true,
                        webUrl: {
                          __typename: "AppPresentation_ExternalLink",
                          externalUrl:
                            "https://www.tripadvisor.com/SocialIapReporting?objectType=Review&contentId=852065182&locationId=19085668",
                          text: null,
                          accessibilityString: null,
                          trackingContext: "server_report_Review_852065182",
                        },
                      },
                    ],
                    safetyText: null,
                    disclaimer: {
                      __typename: "AppPresentation_LocalizedString",
                      string:
                        "This review is the subjective opinion of a Tripadvisor member and not of Tripadvisor LLC.",
                      debugValueKey: null,
                    },
                    htmlText: {
                      __typename: "AppPresentation_HtmlString",
                      htmlString:
                        "we went here and had a great experience with a beachside restaurant, great food and service, with organic dishes and homemade cheeses",
                    },
                    htmlTitle: {
                      __typename: "AppPresentation_HtmlString",
                      htmlString: "MUST TRY IF YOU COME NHA TRANG",
                    },
                    tip: null,
                    tipText: null,
                    supplierName: null,
                    translatedByGoogle: false,
                    subratings: null,
                    userProfile: {
                      __typename: "AppPresentation_MemberProfile",
                      contributionCount: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "2 contributions",
                        debugValueKey: null,
                      },
                      displayName: "bryanpainting",
                      localizedDisplayName: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "bryanpainting",
                        debugValueKey: null,
                      },
                      hometown: "Australind, Australia",
                      avatar: {
                        __typename: "AppPresentation_Media",
                        data: {
                          __typename: "Media_PhotoResult",
                          id: 452389859,
                          caption: "default-avatar-2020-59",
                          publishedDateTime: "2020-02-21T21:11:58.341Z",
                          thumbsUpVotes: 0,
                          uploadDateTime: "2020-02-21T21:11:58.341Z",
                          attribution: {
                            __typename: "Media_Attribution",
                            text: "a Tripadvisor member",
                          },
                          photoSizeDynamic: {
                            __typename: "Media_PhotoResultSizeDynamic",
                            maxHeight: 1200,
                            maxWidth: 1200,
                            urlTemplate:
                              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/eb/e3/default-avatar-2020-59.jpg?w={width}&h={height}&s=1",
                          },
                          sizes: [
                            {
                              __typename: "Media_MediaSize",
                              width: 0,
                              height: 0,
                              url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/eb/e3/default-avatar-2020-59.jpg?w=100&h=100&s=1",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 50,
                              height: 50,
                              url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/eb/e3/default-avatar-2020-59.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 150,
                              height: 150,
                              url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/eb/e3/default-avatar-2020-59.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 180,
                              height: 200,
                              url: "https://media-cdn.tripadvisor.com/media/photo-i/1a/f6/eb/e3/default-avatar-2020-59.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 205,
                              height: 205,
                              url: "https://media-cdn.tripadvisor.com/media/photo-f/1a/f6/eb/e3/default-avatar-2020-59.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 450,
                              height: 450,
                              url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/f6/eb/e3/default-avatar-2020-59.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 550,
                              height: 550,
                              url: "https://media-cdn.tripadvisor.com/media/photo-p/1a/f6/eb/e3/default-avatar-2020-59.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 1024,
                              height: 1024,
                              url: "https://media-cdn.tripadvisor.com/media/photo-w/1a/f6/eb/e3/default-avatar-2020-59.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 1200,
                              height: 1200,
                              url: "https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/eb/e3/default-avatar-2020-59.jpg",
                            },
                          ],
                        },
                      },
                      profileLink: {
                        __typename: "AppPresentation_InternalLink",
                        route: {
                          __typename: "Routing_Route",
                          fragment: null,
                          page: "Profile",
                          url: "/Profile/bryanpainting",
                          nonCanonicalUrl: "/Profile/bryanpainting",
                          typedParams: {
                            __typename: "Routing_ProfileParameters",
                            contentId: null,
                            contentType: null,
                            tab: null,
                            username: "bryanpainting",
                          },
                        },
                        webviewRoute: null,
                        text: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Shows bryanpainting's profile",
                          debugValueKey: null,
                        },
                        accessibilityString: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Shows bryanpainting's profile",
                          debugValueKey: null,
                        },
                        trackingContext: "server_memberProfileLink",
                      },
                    },
                    publishedDate: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Written 08/05/22",
                      debugValueKey: null,
                    },
                    initiallyCollapsed: true,
                  },
                  {
                    __typename: "AppPresentation_ReviewCard",
                    trackingKey:
                      '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_12","lid":19085668,"sn":"Restaurant_Review","rid":849013486}',
                    trackingTitle: "ReviewCard_849013486",
                    stableDiffingType: "ReviewCard_849013486",
                    reviewRating: 5,
                    bubbleRatingText: {
                      __typename: "AppPresentation_JoinedLocalizableObjects",
                      text: "Jul 2022 • Family",
                    },
                    helpfulVote: {
                      __typename: "AppPresentation_HelpfulVote",
                      hasVotedReviewHelpful: false,
                      helpfulVoteAction: {
                        __typename: "AppPresentation_HelpfulVoteAction",
                        objectId: "849013486",
                        objectType: "REVIEW",
                      },
                      helpfulVotes: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "1",
                        debugValueKey: null,
                      },
                    },
                    labels: [],
                    cardLink: null,
                    photos: [],
                    ownerResponse: {
                      __typename: "AppPresentation_OwnerResponse",
                      disclaimer: {
                        __typename: "AppPresentation_LocalizedString",
                        string:
                          "This response is the subjective opinion of the management representative and not of TripAdvisor LLC.",
                        debugValueKey: null,
                      },
                      publishedDate: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Written July 22, 2022",
                        debugValueKey: null,
                      },
                      displayName: "Pizza 4P's",
                      positionAtLocation: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Marketing at Pizza 4P’s Nha Trang – NT",
                        debugValueKey: null,
                      },
                      avatar: {
                        __typename: "AppPresentation_Media",
                        data: {
                          __typename: "Media_PhotoResult",
                          id: 444014634,
                          caption: "Pizza_4Ps",
                          publishedDateTime: "2020-01-02T03:39:55.594Z",
                          thumbsUpVotes: 0,
                          uploadDateTime: "2020-01-02T03:39:55.594Z",
                          attribution: {
                            __typename: "Media_Attribution",
                            text: "Traveler photo submitted by Pizza 4P's",
                          },
                          photoSizeDynamic: {
                            __typename: "Media_PhotoResultSizeDynamic",
                            maxHeight: 600,
                            maxWidth: 600,
                            urlTemplate:
                              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/77/20/2a/pizza-4ps.jpg?w={width}&h={height}&s=1",
                          },
                          sizes: [
                            {
                              __typename: "Media_MediaSize",
                              width: 0,
                              height: 0,
                              url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/77/20/2a/pizza-4ps.jpg?w=100&h=100&s=1",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 50,
                              height: 50,
                              url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 150,
                              height: 150,
                              url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 180,
                              height: 200,
                              url: "https://media-cdn.tripadvisor.com/media/photo-i/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 205,
                              height: 205,
                              url: "https://media-cdn.tripadvisor.com/media/photo-f/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 450,
                              height: 450,
                              url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 550,
                              height: 550,
                              url: "https://media-cdn.tripadvisor.com/media/photo-p/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 600,
                              height: 600,
                              url: "https://media-cdn.tripadvisor.com/media/photo-o/1a/77/20/2a/pizza-4ps.jpg",
                            },
                          ],
                        },
                      },
                      profileLink: null,
                      reportAction: {
                        __typename: "AppPresentation_ReportIAPWebviewAction",
                        actionName: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Report this response",
                          debugValueKey: null,
                        },
                        actionType: "ReportIAPWebviewAction",
                        authenticateUser: true,
                        webUrl: {
                          __typename: "AppPresentation_ExternalLink",
                          externalUrl:
                            "https://www.tripadvisor.com/SocialIapReporting?objectType=OwnerResponse&contentId=849179202&locationId=19085668",
                          text: null,
                          accessibilityString: null,
                          trackingContext:
                            "server_report_OwnerResponse_849179202",
                        },
                      },
                      text: "Dear Snilefisk,\n\nPizza 4p's sincerely thank you for dining at our restaurant and taking the time to leave us a positive review.\n\nWe couldn't happier to know that you are satisfied with our restaurant space, service, and taste of our food. It is a great encouragement for us to continue to bring more great experiences to our valued guests through our Mission \"Delivering Wow, Sharing Happiness\"\n\nHope you continue to love Pizza 4P's in the future.\nThank you once again\n\nPizza 4P's Team",
                    },
                    reviewActions: [
                      {
                        __typename: "AppPresentation_ShareLinkAction",
                      },
                      {
                        __typename: "AppPresentation_ReportIAPWebviewAction",
                        actionName: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Report this review",
                          debugValueKey: null,
                        },
                        actionType: "ReportIAPWebviewAction",
                        authenticateUser: true,
                        webUrl: {
                          __typename: "AppPresentation_ExternalLink",
                          externalUrl:
                            "https://www.tripadvisor.com/SocialIapReporting?objectType=Review&contentId=849013486&locationId=19085668",
                          text: null,
                          accessibilityString: null,
                          trackingContext: "server_report_Review_849013486",
                        },
                      },
                    ],
                    safetyText: null,
                    disclaimer: {
                      __typename: "AppPresentation_LocalizedString",
                      string:
                        "This review is the subjective opinion of a Tripadvisor member and not of Tripadvisor LLC.",
                      debugValueKey: null,
                    },
                    htmlText: {
                      __typename: "AppPresentation_HtmlString",
                      htmlString:
                        "I love the 4p pizza. Especially their pizzas with burrata cheese are excellent. We went here three times in two weeks because we wanted the pizza again. The place is very busy at lunch time and very busy at dinner time. The waiters were running back and forth at an impressive pace. We were happy about the service level - very professional",
                    },
                    htmlTitle: {
                      __typename: "AppPresentation_HtmlString",
                      htmlString: "Try the pizza with burrata cheese!",
                    },
                    tip: null,
                    tipText: null,
                    supplierName: null,
                    translatedByGoogle: false,
                    subratings: null,
                    userProfile: {
                      __typename: "AppPresentation_MemberProfile",
                      contributionCount: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "48 contributions",
                        debugValueKey: null,
                      },
                      displayName: "Snilefisk",
                      localizedDisplayName: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Snilefisk",
                        debugValueKey: null,
                      },
                      hometown: "Varangerbotn",
                      avatar: {
                        __typename: "AppPresentation_Media",
                        data: {
                          __typename: "Media_PhotoResult",
                          id: 452387558,
                          caption: "default-avatar-2020-45",
                          publishedDateTime: "2020-02-21T20:51:00.446Z",
                          thumbsUpVotes: 0,
                          uploadDateTime: "2020-02-21T20:51:00.446Z",
                          attribution: {
                            __typename: "Media_Attribution",
                            text: "a Tripadvisor member",
                          },
                          photoSizeDynamic: {
                            __typename: "Media_PhotoResultSizeDynamic",
                            maxHeight: 1200,
                            maxWidth: 1200,
                            urlTemplate:
                              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e2/e6/default-avatar-2020-45.jpg?w={width}&h={height}&s=1",
                          },
                          sizes: [
                            {
                              __typename: "Media_MediaSize",
                              width: 0,
                              height: 0,
                              url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e2/e6/default-avatar-2020-45.jpg?w=100&h=100&s=1",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 50,
                              height: 50,
                              url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e2/e6/default-avatar-2020-45.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 150,
                              height: 150,
                              url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e2/e6/default-avatar-2020-45.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 180,
                              height: 200,
                              url: "https://media-cdn.tripadvisor.com/media/photo-i/1a/f6/e2/e6/default-avatar-2020-45.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 205,
                              height: 205,
                              url: "https://media-cdn.tripadvisor.com/media/photo-f/1a/f6/e2/e6/default-avatar-2020-45.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 450,
                              height: 450,
                              url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/f6/e2/e6/default-avatar-2020-45.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 550,
                              height: 550,
                              url: "https://media-cdn.tripadvisor.com/media/photo-p/1a/f6/e2/e6/default-avatar-2020-45.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 1024,
                              height: 1024,
                              url: "https://media-cdn.tripadvisor.com/media/photo-w/1a/f6/e2/e6/default-avatar-2020-45.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 1200,
                              height: 1200,
                              url: "https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/e2/e6/default-avatar-2020-45.jpg",
                            },
                          ],
                        },
                      },
                      profileLink: {
                        __typename: "AppPresentation_InternalLink",
                        route: {
                          __typename: "Routing_Route",
                          fragment: null,
                          page: "Profile",
                          url: "/Profile/Snilefisk",
                          nonCanonicalUrl: "/Profile/Snilefisk",
                          typedParams: {
                            __typename: "Routing_ProfileParameters",
                            contentId: null,
                            contentType: null,
                            tab: null,
                            username: "Snilefisk",
                          },
                        },
                        webviewRoute: null,
                        text: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Shows Snilefisk's profile",
                          debugValueKey: null,
                        },
                        accessibilityString: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Shows Snilefisk's profile",
                          debugValueKey: null,
                        },
                        trackingContext: "server_memberProfileLink",
                      },
                    },
                    publishedDate: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Written 07/21/22",
                      debugValueKey: null,
                    },
                    initiallyCollapsed: true,
                  },
                  {
                    __typename: "AppPresentation_ReviewCard",
                    trackingKey:
                      '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_13","lid":19085668,"sn":"Restaurant_Review","rid":834561886}',
                    trackingTitle: "ReviewCard_834561886",
                    stableDiffingType: "ReviewCard_834561886",
                    reviewRating: 3,
                    bubbleRatingText: {
                      __typename: "AppPresentation_JoinedLocalizableObjects",
                      text: "Apr 2022 • Couples",
                    },
                    helpfulVote: {
                      __typename: "AppPresentation_HelpfulVote",
                      hasVotedReviewHelpful: false,
                      helpfulVoteAction: {
                        __typename: "AppPresentation_HelpfulVoteAction",
                        objectId: "834561886",
                        objectType: "REVIEW",
                      },
                      helpfulVotes: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "0",
                        debugValueKey: null,
                      },
                    },
                    labels: [],
                    cardLink: null,
                    photos: [],
                    ownerResponse: {
                      __typename: "AppPresentation_OwnerResponse",
                      disclaimer: {
                        __typename: "AppPresentation_LocalizedString",
                        string:
                          "This response is the subjective opinion of the management representative and not of TripAdvisor LLC.",
                        debugValueKey: null,
                      },
                      publishedDate: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Written April 16, 2022",
                        debugValueKey: null,
                      },
                      displayName: "Pizza 4P's",
                      positionAtLocation: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Marketing at Pizza 4P’s Nha Trang – NT",
                        debugValueKey: null,
                      },
                      avatar: {
                        __typename: "AppPresentation_Media",
                        data: {
                          __typename: "Media_PhotoResult",
                          id: 444014634,
                          caption: "Pizza_4Ps",
                          publishedDateTime: "2020-01-02T03:39:55.594Z",
                          thumbsUpVotes: 0,
                          uploadDateTime: "2020-01-02T03:39:55.594Z",
                          attribution: {
                            __typename: "Media_Attribution",
                            text: "Traveler photo submitted by Pizza 4P's",
                          },
                          photoSizeDynamic: {
                            __typename: "Media_PhotoResultSizeDynamic",
                            maxHeight: 600,
                            maxWidth: 600,
                            urlTemplate:
                              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/77/20/2a/pizza-4ps.jpg?w={width}&h={height}&s=1",
                          },
                          sizes: [
                            {
                              __typename: "Media_MediaSize",
                              width: 0,
                              height: 0,
                              url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/77/20/2a/pizza-4ps.jpg?w=100&h=100&s=1",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 50,
                              height: 50,
                              url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 150,
                              height: 150,
                              url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 180,
                              height: 200,
                              url: "https://media-cdn.tripadvisor.com/media/photo-i/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 205,
                              height: 205,
                              url: "https://media-cdn.tripadvisor.com/media/photo-f/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 450,
                              height: 450,
                              url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 550,
                              height: 550,
                              url: "https://media-cdn.tripadvisor.com/media/photo-p/1a/77/20/2a/pizza-4ps.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 600,
                              height: 600,
                              url: "https://media-cdn.tripadvisor.com/media/photo-o/1a/77/20/2a/pizza-4ps.jpg",
                            },
                          ],
                        },
                      },
                      profileLink: null,
                      reportAction: {
                        __typename: "AppPresentation_ReportIAPWebviewAction",
                        actionName: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Report this response",
                          debugValueKey: null,
                        },
                        actionType: "ReportIAPWebviewAction",
                        authenticateUser: true,
                        webUrl: {
                          __typename: "AppPresentation_ExternalLink",
                          externalUrl:
                            "https://www.tripadvisor.com/SocialIapReporting?objectType=OwnerResponse&contentId=834714871&locationId=19085668",
                          text: null,
                          accessibilityString: null,
                          trackingContext:
                            "server_report_OwnerResponse_834714871",
                        },
                      },
                      text: "Dear Mr/Ms. Greggggg123,\n\nWe are very sorry to hear about your negative experience at Pizza 4P's.\nWe hope we could discuss some of the details and specifics via email: feedback@pizza4ps.com, Facebook Messenger m.me/Pizza4Ps. or Hotline: (028) 3622 0500 (9:00 - 22:00).\n\nThanks for sharing this helpful feedback with us.\nPizza 4P's Team.",
                    },
                    reviewActions: [
                      {
                        __typename: "AppPresentation_ShareLinkAction",
                      },
                      {
                        __typename: "AppPresentation_ReportIAPWebviewAction",
                        actionName: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Report this review",
                          debugValueKey: null,
                        },
                        actionType: "ReportIAPWebviewAction",
                        authenticateUser: true,
                        webUrl: {
                          __typename: "AppPresentation_ExternalLink",
                          externalUrl:
                            "https://www.tripadvisor.com/SocialIapReporting?objectType=Review&contentId=834561886&locationId=19085668",
                          text: null,
                          accessibilityString: null,
                          trackingContext: "server_report_Review_834561886",
                        },
                      },
                    ],
                    safetyText: null,
                    disclaimer: {
                      __typename: "AppPresentation_LocalizedString",
                      string:
                        "This review is the subjective opinion of a Tripadvisor member and not of Tripadvisor LLC.",
                      debugValueKey: null,
                    },
                    htmlText: {
                      __typename: "AppPresentation_HtmlString",
                      htmlString:
                        "Happy to say (or embarrassed, given the high quality of local food??) that we’ve eaten 4P’s all over Vietnam. The one by the beach in Nha Trang may need a little refining of things. First time around we had no issues but the second occasion there was a 20 minute gap between our 3 cheese pizza being brought to the table and receiving our lasagne. There were 6 other people in the restaurant, so they were far from busy. Not much fun when you both eat alone and fairly amateurish.",
                    },
                    htmlTitle: {
                      __typename: "AppPresentation_HtmlString",
                      htmlString:
                        "Not as efficient as the rest of the 4P’s Pizza restaurants",
                    },
                    tip: null,
                    tipText: null,
                    supplierName: null,
                    translatedByGoogle: false,
                    subratings: null,
                    userProfile: {
                      __typename: "AppPresentation_MemberProfile",
                      contributionCount: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "125 contributions",
                        debugValueKey: null,
                      },
                      displayName: "Greggggg123",
                      localizedDisplayName: {
                        __typename: "AppPresentation_LocalizedString",
                        string: "Greggggg123",
                        debugValueKey: null,
                      },
                      hometown: null,
                      avatar: {
                        __typename: "AppPresentation_Media",
                        data: {
                          __typename: "Media_PhotoResult",
                          id: 452386535,
                          caption: "default-avatar-2020-37",
                          publishedDateTime: "2020-02-21T20:41:16.767Z",
                          thumbsUpVotes: 0,
                          uploadDateTime: "2020-02-21T20:41:16.767Z",
                          attribution: {
                            __typename: "Media_Attribution",
                            text: "a Tripadvisor member",
                          },
                          photoSizeDynamic: {
                            __typename: "Media_PhotoResultSizeDynamic",
                            maxHeight: 1200,
                            maxWidth: 1200,
                            urlTemplate:
                              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/de/e7/default-avatar-2020-37.jpg?w={width}&h={height}&s=1",
                          },
                          sizes: [
                            {
                              __typename: "Media_MediaSize",
                              width: 0,
                              height: 0,
                              url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/de/e7/default-avatar-2020-37.jpg?w=100&h=100&s=1",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 50,
                              height: 50,
                              url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/de/e7/default-avatar-2020-37.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 150,
                              height: 150,
                              url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/de/e7/default-avatar-2020-37.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 180,
                              height: 200,
                              url: "https://media-cdn.tripadvisor.com/media/photo-i/1a/f6/de/e7/default-avatar-2020-37.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 205,
                              height: 205,
                              url: "https://media-cdn.tripadvisor.com/media/photo-f/1a/f6/de/e7/default-avatar-2020-37.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 450,
                              height: 450,
                              url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/f6/de/e7/default-avatar-2020-37.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 550,
                              height: 550,
                              url: "https://media-cdn.tripadvisor.com/media/photo-p/1a/f6/de/e7/default-avatar-2020-37.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 1024,
                              height: 1024,
                              url: "https://media-cdn.tripadvisor.com/media/photo-w/1a/f6/de/e7/default-avatar-2020-37.jpg",
                            },
                            {
                              __typename: "Media_MediaSize",
                              width: 1200,
                              height: 1200,
                              url: "https://media-cdn.tripadvisor.com/media/photo-o/1a/f6/de/e7/default-avatar-2020-37.jpg",
                            },
                          ],
                        },
                      },
                      profileLink: {
                        __typename: "AppPresentation_InternalLink",
                        route: {
                          __typename: "Routing_Route",
                          fragment: null,
                          page: "Profile",
                          url: "/Profile/Greggggg123",
                          nonCanonicalUrl: "/Profile/Greggggg123",
                          typedParams: {
                            __typename: "Routing_ProfileParameters",
                            contentId: null,
                            contentType: null,
                            tab: null,
                            username: "Greggggg123",
                          },
                        },
                        webviewRoute: null,
                        text: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Shows Greggggg123's profile",
                          debugValueKey: null,
                        },
                        accessibilityString: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Shows Greggggg123's profile",
                          debugValueKey: null,
                        },
                        trackingContext: "server_memberProfileLink",
                      },
                    },
                    publishedDate: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Written 04/14/22",
                      debugValueKey: null,
                    },
                    initiallyCollapsed: true,
                  },
                ],
              },
              {
                __typename: "AppPresentation_Tab",
                initialTab: null,
                seeMore: null,
                seeMoreV2: null,
                searchLink: null,
                tabTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Q&A",
                  debugValueKey: null,
                },
                tabSearchHint: null,
                content: [
                  {
                    __typename: "AppPresentation_NoContentFallbackCard",
                    trackingKey:
                      '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_14","sn":"Restaurant_Review"}',
                    trackingTitle: "NoContentTabCard",
                    stableDiffingType:
                      "NO_CONTENT_phoenix_q_and_a_section_empty_state_restaurant",
                    cardLink: null,
                    noContentText: {
                      __typename: "AppPresentation_LocalizedString",
                      string:
                        "No questions have been asked about this restaurant",
                      debugValueKey: null,
                    },
                    ctaList: [
                      {
                        __typename: "AppPresentation_InternalLink",
                        route: {
                          __typename: "Routing_Route",
                          fragment: null,
                          page: "AppAskAQuestion",
                          url: "/AppAskAQuestion?contentType=restaurant&contentId=19085668",
                          nonCanonicalUrl:
                            "/AppAskAQuestion?contentType=restaurant&contentId=19085668",
                          typedParams: {
                            __typename: "Routing_AppAskAQuestionParameters",
                            contentId: "19085668",
                            contentType: "restaurant",
                          },
                        },
                        webviewRoute: {
                          __typename: "Routing_Route",
                          fragment: null,
                          page: "FAQ",
                          url: "/FAQ-g293928-d19085668-Pizza_4P_s_Nha_Trang_NT.html",
                          nonCanonicalUrl:
                            "/FAQ-g293928-d19085668-Pizza_4P_s_Nha_Trang_NT.html",
                          typedParams: {
                            __typename: "Routing_FAQParameters",
                          },
                        },
                        text: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Ask a question",
                          debugValueKey: null,
                        },
                        accessibilityString: null,
                        trackingContext: "askAQuestion_qa",
                      },
                      {
                        __typename: "AppPresentation_InternalLink",
                        route: {
                          __typename: "Routing_Route",
                          fragment: null,
                          page: "AppUserReview",
                          url: "/AppUserReview?contentType=restaurant&contentId=19085668&locationId=19085668",
                          nonCanonicalUrl:
                            "/AppUserReview?contentType=restaurant&contentId=19085668&locationId=19085668",
                          typedParams: {
                            __typename: "Routing_AppUserReviewParameters",
                            contentId: "19085668",
                          },
                        },
                        webviewRoute: null,
                        text: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Write a review",
                          debugValueKey: null,
                        },
                        accessibilityString: null,
                        trackingContext: "server_writeReview_qa",
                      },
                      {
                        __typename: "AppPresentation_InternalLink",
                        route: {
                          __typename: "Routing_Route",
                          fragment: null,
                          page: "AppUploadAPhoto",
                          url: "/AppUploadAPhoto?contentType=restaurant&contentId=19085668&locationId=19085668",
                          nonCanonicalUrl:
                            "/AppUploadAPhoto?contentType=restaurant&contentId=19085668&locationId=19085668",
                          typedParams: {
                            __typename: "Routing_AppUploadAPhotoParameters",
                            contentId: "19085668",
                          },
                        },
                        webviewRoute: null,
                        text: {
                          __typename: "AppPresentation_LocalizedString",
                          string: "Upload a photo",
                          debugValueKey: null,
                        },
                        accessibilityString: null,
                        trackingContext: "server_uploadAPhoto_qa",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_RESTAURANT_XSELL",
            spacing: "spacing-08",
            clusterId: "RESTAURANT_XSELL",
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_WideCardsCarousel",
            wideCardsCarouselTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "Also popular with travelers",
              debugValueKey: null,
            },
            subtitle: null,
            sponsoredBy: null,
            trackingTitle: "RestaurantXSellSection_RESTAURANT_XSELL",
            trackingKey:
              '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_15","rst":"MEDIUM_PRICED","lid":19085668,"sn":"Restaurant_Review"}',
            stableDiffingType: "RestaurantXSellSection_RESTAURANT_XSELL",
            tooltip: null,
            seeAllV2: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppList",
                url: "/AppList-g293928-a_contentType.restaurant-zfg10591-zfm10955-a_isList.true.html",
                nonCanonicalUrl:
                  "/AppList-g293928-a_contentType.restaurant-zfg10591-zfm10955-a_isList.true.html",
                typedParams: {
                  __typename: "Routing_AppListParameters",
                  contentType: "restaurant",
                  geoId: 293928,
                  isCollectionView: null,
                  isList: true,
                  isMap: null,
                  isNearby: null,
                  nearLocationId: null,
                  nearLocationType: null,
                  pagee: null,
                  sort: null,
                  sortOrder: null,
                  routingFilters: [
                    {
                      __typename: "Routing_Filters",
                      id: "establishment",
                      value: ["10591"],
                    },
                    {
                      __typename: "Routing_Filters",
                      id: "price",
                      value: ["10955"],
                    },
                  ],
                },
              },
              webviewRoute: null,
              text: {
                __typename: "AppPresentation_LocalizedString",
                string: "See all",
                debugValueKey: null,
              },
              accessibilityString: null,
              trackingContext: "server_seeAll",
            },
            wideCardsCarouselContent: [
              {
                __typename: "AppPresentation_VerticalStandardCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "LARGE",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":752,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_15_0","ctt":"LOCATION","pt":"restaurant","lid":1803465,"pir":1,"mid":622864356,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "PoiVerticalStandardCard_restaurant_8886823f-dd9c-4c55-9c7c-6af263a2db22",
                stableDiffingType:
                  "PoiVerticalStandardCard_restaurant_8886823f-dd9c-4c55-9c7c-6af263a2db22",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "1803465",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Feast",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Seafood • International • Asian",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now • Nha Trang",
                },
                closureInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1365,
                    maxWidth: 2048,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/20/27/e4/weekend-seafood-buffet.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "752",
                    debugValueKey: null,
                  },
                },
                distance: null,
                commerceButtons: null,
                labels: [],
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=8886823f-dd9c-4c55-9c7c-6af263a2db22",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=8886823f-dd9c-4c55-9c7c-6af263a2db22",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "8886823f-dd9c-4c55-9c7c-6af263a2db22",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Feast",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
              },
              {
                __typename: "AppPresentation_VerticalStandardCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "LARGE",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":4.5,"rc":792,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_15_1","ctt":"LOCATION","pt":"restaurant","lid":2233968,"pir":2,"mid":354984055,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "PoiVerticalStandardCard_restaurant_aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                stableDiffingType:
                  "PoiVerticalStandardCard_restaurant_aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "2233968",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Altitude Rooftop Bar",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Bar • European • Gastropub",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now • Nha Trang",
                },
                closureInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 595,
                    maxWidth: 1137,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/28/a0/77/sunset.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "792",
                    debugValueKey: null,
                  },
                },
                distance: null,
                commerceButtons: null,
                labels: [],
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Altitude Rooftop Bar",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
              },
              {
                __typename: "AppPresentation_VerticalStandardCard",
                badge: null,
                trackingKey:
                  '{"br":4.5,"rc":441,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_15_2","ctt":"LOCATION","pt":"restaurant","lid":1803467,"pir":5,"mid":409857124,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "PoiVerticalStandardCard_restaurant_a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                stableDiffingType:
                  "PoiVerticalStandardCard_restaurant_a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "1803467",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Steam n' Spice",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Hong Kong • Vegetarian Friendly • Vegan Options",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now • Nha Trang",
                },
                closureInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1638,
                    maxWidth: 2458,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/6d/ec/64/sns-dinner.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "441",
                    debugValueKey: null,
                  },
                },
                distance: null,
                commerceButtons: null,
                labels: [],
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Steam n' Spice",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
              },
              {
                __typename: "AppPresentation_VerticalStandardCard",
                badge: null,
                trackingKey:
                  '{"br":4.5,"rc":2800,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_15_3","ctt":"LOCATION","pt":"restaurant","lid":8536569,"pir":6,"mid":196174187,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "PoiVerticalStandardCard_restaurant_17998258-0a82-4fbe-9133-1a58ea9eb066",
                stableDiffingType:
                  "PoiVerticalStandardCard_restaurant_17998258-0a82-4fbe-9133-1a58ea9eb066",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "8536569",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Skylight Nha Trang",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Seafood • International • Fusion",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Nha Trang",
                },
                closureInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1349,
                    maxWidth: 1800,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/b1/61/6b/360-of-nha-trang.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "2,800",
                    debugValueKey: null,
                  },
                },
                distance: null,
                commerceButtons: null,
                labels: [],
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=17998258-0a82-4fbe-9133-1a58ea9eb066",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=17998258-0a82-4fbe-9133-1a58ea9eb066",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "17998258-0a82-4fbe-9133-1a58ea9eb066",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Skylight Nha Trang",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
              },
              {
                __typename: "AppPresentation_VerticalStandardCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "LARGE",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":5.0,"rc":180,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_15_4","ctt":"LOCATION","pt":"restaurant","lid":17731958,"pir":7,"mid":623900774,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "PoiVerticalStandardCard_restaurant_c418cb27-b12d-49da-b9eb-71325bccea26",
                stableDiffingType:
                  "PoiVerticalStandardCard_restaurant_c418cb27-b12d-49da-b9eb-71325bccea26",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "17731958",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "La Cala",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Italian • Pizza • Cafe",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now • Nha Trang",
                },
                closureInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 2383,
                    maxWidth: 2383,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/2f/f8/66/come-to-la-cala-gusto.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "180",
                    debugValueKey: null,
                  },
                },
                distance: null,
                commerceButtons: null,
                labels: [],
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=c418cb27-b12d-49da-b9eb-71325bccea26",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=c418cb27-b12d-49da-b9eb-71325bccea26",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "c418cb27-b12d-49da-b9eb-71325bccea26",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for La Cala",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
              },
              {
                __typename: "AppPresentation_VerticalStandardCard",
                badge: null,
                trackingKey:
                  '{"br":5.0,"rc":166,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_15_5","ctt":"LOCATION","pt":"restaurant","lid":17596444,"pir":8,"mid":635242825,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "PoiVerticalStandardCard_restaurant_44937fbf-c456-4d06-ba78-b936ac082e4c",
                stableDiffingType:
                  "PoiVerticalStandardCard_restaurant_44937fbf-c456-4d06-ba78-b936ac082e4c",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "17596444",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Sushi Mania",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Japanese • Sushi • Healthy",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now • Nha Trang",
                },
                closureInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 930,
                    maxWidth: 1242,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/dd/09/49/sushi-mania-lounge.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "166",
                    debugValueKey: null,
                  },
                },
                distance: null,
                commerceButtons: null,
                labels: [],
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=44937fbf-c456-4d06-ba78-b936ac082e4c",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=44937fbf-c456-4d06-ba78-b936ac082e4c",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "44937fbf-c456-4d06-ba78-b936ac082e4c",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Sushi Mania",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
              },
              {
                __typename: "AppPresentation_VerticalStandardCard",
                badge: null,
                trackingKey:
                  '{"br":5.0,"rc":307,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_15_6","ctt":"LOCATION","pt":"restaurant","lid":15296376,"pir":10,"mid":390287547,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "PoiVerticalStandardCard_restaurant_ca4765d3-81c8-4f2a-8fdb-e50f5ce89617",
                stableDiffingType:
                  "PoiVerticalStandardCard_restaurant_ca4765d3-81c8-4f2a-8fdb-e50f5ce89617",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "15296376",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Dinner at Cim’s",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Steakhouse • Seafood • European",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now • Nha Trang",
                },
                closureInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1536,
                    maxWidth: 2048,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/43/50/bb/photo0jpg.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "307",
                    debugValueKey: null,
                  },
                },
                distance: null,
                commerceButtons: null,
                labels: [],
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=ca4765d3-81c8-4f2a-8fdb-e50f5ce89617",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=ca4765d3-81c8-4f2a-8fdb-e50f5ce89617",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "ca4765d3-81c8-4f2a-8fdb-e50f5ce89617",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Dinner at Cim’s",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
              },
              {
                __typename: "AppPresentation_VerticalStandardCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "LARGE",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":4.5,"rc":721,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_15_7","ctt":"LOCATION","pt":"restaurant","lid":8073622,"pir":11,"mid":360044220,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "PoiVerticalStandardCard_restaurant_40a8df9e-aebb-4ac5-ba82-41ff038fb346",
                stableDiffingType:
                  "PoiVerticalStandardCard_restaurant_40a8df9e-aebb-4ac5-ba82-41ff038fb346",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "8073622",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "LIVIN Barbecue",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • American • Barbecue • Grill",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now • Nha Trang",
                },
                closureInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 592,
                    maxWidth: 892,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/75/d6/bc/smoked-bbq-brontosaurus.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "721",
                    debugValueKey: null,
                  },
                },
                distance: null,
                commerceButtons: null,
                labels: [],
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=40a8df9e-aebb-4ac5-ba82-41ff038fb346",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=40a8df9e-aebb-4ac5-ba82-41ff038fb346",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "40a8df9e-aebb-4ac5-ba82-41ff038fb346",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for LIVIN Barbecue",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
              },
              {
                __typename: "AppPresentation_VerticalStandardCard",
                badge: {
                  __typename: "AppPresentation_Badge",
                  size: "LARGE",
                  type: "TRAVELLER_CHOICE",
                  year: "2022",
                },
                trackingKey:
                  '{"br":4.5,"rc":646,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_15_8","ctt":"LOCATION","pt":"restaurant","lid":3839317,"pir":12,"mid":458039024,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "PoiVerticalStandardCard_restaurant_2efc9b9c-91ec-48dc-a7cb-f43fe0589a81",
                stableDiffingType:
                  "PoiVerticalStandardCard_restaurant_2efc9b9c-91ec-48dc-a7cb-f43fe0589a81",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "3839317",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Swiss House La Casserole",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Swiss • European • Vegetarian Friendly",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now • Nha Trang",
                },
                closureInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 2752,
                    maxWidth: 5664,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4d/1e/f0/42-tue-tinh-street.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "646",
                    debugValueKey: null,
                  },
                },
                distance: null,
                commerceButtons: null,
                labels: [],
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=2efc9b9c-91ec-48dc-a7cb-f43fe0589a81",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=2efc9b9c-91ec-48dc-a7cb-f43fe0589a81",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "2efc9b9c-91ec-48dc-a7cb-f43fe0589a81",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Swiss House La Casserole",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
              },
              {
                __typename: "AppPresentation_VerticalStandardCard",
                badge: null,
                trackingKey:
                  '{"br":4.5,"rc":1089,"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_15_9","ctt":"LOCATION","pt":"restaurant","lid":8624662,"pir":9,"mid":258293995,"sn":"Restaurant_Review"}',
                trackingTitle:
                  "PoiVerticalStandardCard_restaurant_6bf3bc91-13e3-49e4-ba70-acc9de144d19",
                stableDiffingType:
                  "PoiVerticalStandardCard_restaurant_6bf3bc91-13e3-49e4-ba70-acc9de144d19",
                isSaved: false,
                saveId: {
                  __typename: "Trips_ReferenceV2",
                  id: "8624662",
                  type: "location",
                },
                cardTitle: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Alpaca Homestyle Cafe",
                  debugValueKey: null,
                },
                primaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "$$ - $$$ • Cafe • European • Healthy",
                },
                secondaryInfo: {
                  __typename: "AppPresentation_JoinedLocalizableObjects",
                  text: "Open now • Nha Trang",
                },
                closureInfo: null,
                cardPhoto: {
                  __typename: "AppPresentation_PhotoItem",
                  sizes: {
                    __typename: "AppPresentation_PhotoItemSizeDynamic",
                    maxHeight: 1536,
                    maxWidth: 2048,
                    urlTemplate:
                      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/65/40/eb/photo0jpg.jpg?w={width}&h={height}&s=1",
                  },
                },
                bubbleRating: {
                  __typename: "AppPresentation_BubbleRating",
                  rating: 4.5,
                  numberReviews: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "1,089",
                    debugValueKey: null,
                  },
                },
                distance: null,
                commerceButtons: null,
                labels: [],
                cardLink: {
                  __typename: "AppPresentation_InternalLink",
                  route: {
                    __typename: "Routing_Route",
                    fragment: null,
                    page: "AppDetail",
                    url: "/AppDetail?contentType=restaurant&contentId=6bf3bc91-13e3-49e4-ba70-acc9de144d19",
                    nonCanonicalUrl:
                      "/AppDetail?contentType=restaurant&contentId=6bf3bc91-13e3-49e4-ba70-acc9de144d19",
                    typedParams: {
                      __typename: "Routing_AppDetailParameters",
                      contentId: "6bf3bc91-13e3-49e4-ba70-acc9de144d19",
                      contentType: "restaurant",
                      spAttributionToken: null,
                      wasPlusShown: null,
                    },
                  },
                  webviewRoute: null,
                  text: null,
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View details for Alpaca Homestyle Cafe",
                    debugValueKey: null,
                  },
                  trackingContext: "server_card",
                },
              },
            ],
            clusterId: "RESTAURANT_XSELL",
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_9",
            spacing: "spacing-08",
            clusterId: null,
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_PoiImproveThisListing",
            stableDiffingType: "ImproveThisListingSection",
            trackingKey:
              '{"ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_16","lid":19085668,"sn":"Restaurant_Review"}',
            trackingTitle: "ImproveThisListingSection",
            sectionTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "Anything missing or inaccurate?",
              debugValueKey: null,
            },
            sectionDescription: {
              __typename: "AppPresentation_LocalizedString",
              string: "Suggest edits to improve what we show.",
              debugValueKey: null,
            },
            improveThisListingRoute: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "ImproveListing",
                url: "/ImproveListing-d19085668.html",
                nonCanonicalUrl: "/ImproveListing-d19085668.html",
                typedParams: {
                  __typename: "Routing_ImproveListingParameters",
                },
              },
              webviewRoute: null,
              text: {
                __typename: "AppPresentation_LocalizedString",
                string: "Improve this listing",
                debugValueKey: null,
              },
              accessibilityString: null,
              trackingContext: "server_improveThisListing",
            },
            clusterId: null,
          },
          {
            __typename: "AppPresentation_LogicalBreak",
            stableDiffingType: "LogicalBreakSection_10",
            spacing: "spacing-05",
            clusterId: null,
            divider: null,
            background: null,
          },
          {
            __typename: "AppPresentation_AdPlaceholderNative",
            trackingTitle: "AdPlaceholder_NATIVE_1",
            trackingKey:
              '{"adt":"NATIVE","ik":"ec1a0a22-9e81-4391-80c0-71a14bc0fdaa_17","sn":"Restaurant_Review"}',
            stableDiffingType: "AdPlaceholder_NATIVE_1",
            clusterId: null,
            adUnitId: "/5349/ta.ta.com.s/as.vietnam.khanh_hoa.nha_trang",
            adSizes: ["FLUID", "_300x250"],
            targetingParams: [
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "country",
                values: ["293921"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "detail",
                values: ["19085668"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "geo",
                values: ["293928"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "geo_ctx",
                values: [
                  "11929",
                  "11933",
                  "12028",
                  "12036",
                  "21827",
                  "21840",
                  "21856",
                ],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "hname",
                values: ["Pizza_4P_s_Nha_Trang_NT"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "loctype",
                values: ["restaurants"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "PageType",
                values: ["Restaurant_Review"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "platform",
                values: ["mobile_app"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "rd",
                values: ["com"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "region",
                values: ["1184689"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "cuisine",
                values: [
                  "Italian",
                  "Pizza",
                  "Gastropub",
                  "Salvadoran",
                  "Israeli",
                ],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "pos",
                values: ["footer"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "fluidType",
                values: ["mobile"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "correlator",
                values: ["7254230461993429"],
              },
              {
                __typename: "AppPresentation_AdTargetingParam",
                key: "sess",
                values: ["181D00CE4285473C8671263040848B1D"],
              },
            ],
          },
        ],
        impressions: [
          {
            __typename: "AppPresentation_ImpressionLog",
            data: "noClientLog",
          },
        ],
        status: {
          __typename: "AppPresentation_QueryResponseStatus",
          message: null,
          success: true,
          pollingStatus: {
            __typename: "AppPresentation_QueryResponsePollingStatus",
            delayForNextPollInMillis: 1000,
            updateToken:
              "eyJ2ZXIiOiJ2MiIsInR5cCI6IkpXVCIsImFsZyI6IkVTMjU2IiwidmVyc2lvbiI6IjEifQ.eyJvYmplY3QiOiJ7XCJAY1wiOlwiLlVwZGF0ZVRva2VuXCIsXCJ0eXBlXCI6XCJQT0xMSU5HXCIsXCJjbHVzdGVySWRzXCI6W1wiY29tLnRyaXBhZHZpc29yLnNlcnZpY2UuYXBzLm1vZGVsLlBvaUNvbW1lcmNlUmVzdGF1cmFudFwiXSxcInByb3ZpZGVyVXBkYXRlVG9rZW5zXCI6e1wiUkFDX0RFRkFVTFRfUE9MTEFCTEVfUFJPVklERVJcIjp7XCJAY1wiOlwiLlN0cmluZ1ZhbHVlUHJvdmlkZXJVcGRhdGVUb2tlblwiLFwidmFsdWVcIjpcIjE5MDg1NjY4fDIwMjItMTEtMDdUMjA6MDB8OXwyXCJ9fSxcInBvbGxpbmdTZXF1ZW5jZU51bVwiOjF9In0.ODU1YmIwMjAtZTAyOC00NjE0LWFjMzEtMjhkMTI4NzFjNjgwLk1FUUNJRlJLVWlVeDM0NXBfM0ZNOWlMdDBvMVUybEd3dzZGOWdadFBwZE5WYkdMbEFpQlEzWmtNXzJIcWEwazhUemZtWTdZbW9OdlQxZDNyNktJSGRhYTY3cXhIQkE",
          },
        },
        commerce: {
          __typename: "AppPresentation_CommerceParameters",
          attractionCommerce: {
            __typename: "AppPresentation_AttractionCommerceParameters",
            setByUser: false,
            updated: null,
            startDate: "2022-11-07",
            endDate: "2022-11-08",
            pax: [
              {
                __typename: "AppPresentation_AgeBandSelection",
                count: 2,
                ageBand: "ADULT",
                endAge: null,
                maxTravelersPerBooking: null,
                minTravelersPerBooking: null,
                startAge: null,
              },
            ],
          },
          hotelCommerce: {
            __typename: "AppPresentation_HotelCommerceParameters",
            setByUser: false,
            updated: null,
            checkIn: "2022-11-07",
            checkOut: "2022-11-08",
            rooms: [
              {
                __typename: "AppPresentation_HotelRoom",
                adults: 2,
                childrenAges: [],
              },
            ],
          },
          restaurantCommerce: {
            __typename: "AppPresentation_RestaurantCommerceParameters",
            setByUser: true,
            updated: null,
            partySize: 2,
            reservationTime: "2022-11-07T20:00:00",
          },
          lastUpdated: null,
        },
        updatedClusterIds: null,
        datePickerConfig: {
          __typename: "AppPresentation_DatePickerConfig",
          hotelDatePickerConfig: {
            __typename: "AppPresentation_HotelDatePickerConfig",
            maxStayLength: 30,
          },
          lastSelectableDate: "2023-11-17",
          restaurantDatePickerConfig: {
            __typename: "AppPresentation_RestaurantDatePickerConfig",
            numDisplayOptions: 9,
            reservationRange: {
              __typename: "AppPresentation_ReservationRange",
              maxDate: "2023-11-17",
              maxTime: "23:30:00",
              minDate: "2022-10-17",
              minTime: "00:00:00",
            },
          },
          surfaces: ["LIST", "MAP"],
          timeZoneOffset: "+07:00",
          attractionProductDatePickerConfig: null,
        },
      },
    ],
  },
};