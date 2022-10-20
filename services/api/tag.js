import makeFactoryClass from '../class_factory'
import BaseClass from './base_class'

class Tag extends BaseClass {
  getTag() {
    throw new Error('not implement')
  }
}

// mock
class TagMock extends Tag {
  getTag(params) {
    if (params === 'girl')
      return Promise.resolve([
        {
          label: 'スレンダー',
          slug: 'slender',
          id: 1,
        },
        {
          label: '小柄',
          slug: 'small_build',
          id: 2,
        },
        {
          label: '長身',
          slug: 'tall',
          id: 3,
        },
        {
          label: '美乳',
          slug: 'beautiful_breasts',
          id: 4,
        },
        {
          label: '美脚',
          slug: 'beautiful_legs',
          id: 5,
        },
        {
          label: '美尻',
          slug: 'beautiful_buttocks',
          id: 6,
        },
        {
          label: '巨乳',
          slug: 'big_tits',
          id: 7,
        },
        {
          label: 'グラマー',
          slug: 'glamour',
          id: 8,
        },
        {
          label: 'モデル系',
          slug: 'model',
          id: 9,
        },
        {
          label: '現役学生',
          slug: 'student',
          id: 10,
        },
        {
          label: 'ロリ',
          slug: 'lolita',
          id: 11,
        },
        {
          label: 'ニューハーフ',
          slug: 'transsexual',
          id: 12,
        },
        {
          label: '人妻系',
          slug: 'married_woman',
          id: 13,
        },
        {
          label: 'お姉さん',
          slug: 'sister',
          id: 14,
        },
        {
          label: 'パイパン',
          slug: 'shaved',
          id: 15,
        },
        {
          label: 'アイドル系',
          slug: 'idol_type',
          id: 16,
        },
        {
          label: 'カワイイ',
          slug: 'cute',
          id: 17,
        },
        {
          label: 'セクシー',
          slug: 'sexy',
          id: 18,
        },
        {
          label: '萌',
          slug: 'moe',
          id: 19,
        },
        {
          label: 'キレカワ',
          slug: 'kirekawa',
          id: 20,
        },
        {
          label: 'キレイ',
          slug: 'beautiful',
          id: 21,
        },
        {
          label: '美少女',
          slug: 'beautiful_girl',
          id: 22,
        },
        {
          label: '美肌',
          slug: 'beautiful_skin',
          id: 23,
        },
        {
          label: '黒髪',
          slug: 'black_hair',
          id: 24,
        },
        {
          label: 'ハーフ',
          slug: 'half-japanese',
          id: 25,
        },
        {
          label: '素人',
          slug: 'amateur',
          id: 26,
        },
        {
          label: 'AV女優',
          slug: 'av_actress',
          id: 27,
        },
        {
          label: 'レズビアン',
          slug: 'lesbian',
          id: 28,
        },
        {
          label: 'OL系',
          slug: 'office_lady',
          id: 29,
        },
        {
          label: '喫煙',
          slug: 'smoking',
          id: 30,
        },
        {
          label: '未経験',
          slug: 'inexperienced',
          id: 31,
        },
        {
          label: '温厚',
          slug: 'mild-mannered',
          id: 32,
        },
        {
          label: 'ドM',
          slug: 'very_masochistic',
          id: 33,
        },
        {
          label: '責め好き',
          slug: 'like_to_blame',
          id: 34,
        },
        {
          label: '受け身好き',
          slug: 'passive',
          id: 35,
        },
        {
          label: '愛嬌抜群',
          slug: 'very_charming',
          id: 36,
        },
        {
          label: 'おっとり',
          slug: 'easy_going',
          id: 37,
        },
        {
          label: '天然',
          slug: 'natural',
          id: 38,
        },
        {
          label: 'サービス抜群',
          slug: 'excellent_service',
          id: 39,
        },
        {
          label: '明るい',
          slug: 'cheerful',
          id: 40,
        },
        {
          label: '甘えん坊',
          slug: 'pampered',
          id: 41,
        },
        {
          label: '癒し系',
          slug: 'healing_type',
          id: 42,
        },
        {
          label: 'キャバ系',
          slug: 'cabaret_style',
          id: 43,
        },
        {
          label: 'ルックス抜群',
          slug: 'good_looks',
          id: 44,
        },
        {
          label: 'スタイル抜群',
          slug: 'excellent_style',
          id: 45,
        },
        {
          label: 'オタク',
          slug: 'geek',
          id: 46,
        },
        {
          label: 'アニメ声',
          slug: 'anime_voice',
          id: 47,
        },
        {
          label: '感度抜群',
          slug: 'very_sensitive',
          id: 48,
        },
        {
          label: 'ドS',
          slug: 'very_sadistic',
          id: 49,
        },
        {
          label: '変態',
          slug: 'perverted',
          id: 50,
        },
        {
          label: '痴女',
          slug: 'lascivious',
          id: 51,
        },
        {
          label: '色白',
          slug: 'fair_skinned',
          id: 52,
        },
      ])
    return Promise.resolve([
      {
        label: '栄町',
        slug: 'sakaecho',
        id: 53,
      },
      {
        label: '幕張',
        slug: 'makuhari',
        id: 54,
      },
      {
        label: '市川',
        slug: 'ichikawa',
        id: 55,
      },
      {
        label: '東金',
        slug: 'togane',
        id: 56,
      },
      {
        label: '市原',
        slug: 'ichihara',
        id: 57,
      },
      {
        label: '木更津',
        slug: 'kisarazu',
        id: 58,
      },
      {
        label: '柏',
        slug: 'kashiwa',
        id: 59,
      },
      {
        label: '松戸',
        slug: 'matsudo',
        id: 60,
      },
      {
        label: '吉原',
        slug: 'yoshiwara',
        id: 87,
      },
      {
        label: '池袋',
        slug: 'ikebukuro',
        id: 88,
      },
      {
        label: '渋谷',
        slug: 'shibuya',
        id: 89,
      },
      {
        label: '恵比寿',
        slug: 'ebisu',
        id: 90,
      },
      {
        label: '新宿',
        slug: 'shinjuku',
        id: 91,
      },
      {
        label: '高田馬場',
        slug: 'takadanobaba',
        id: 92,
      },
      {
        label: '大塚',
        slug: 'otsuka',
        id: 93,
      },
      {
        label: '大久保・新大久保',
        slug: 'okubo_shinokubo',
        id: 94,
      },
      {
        label: '上野',
        slug: 'ueno',
        id: 95,
      },
      {
        label: '鶯谷',
        slug: 'uguisudani',
        id: 96,
      },
      {
        label: '日暮里・西日暮里',
        slug: 'nippori_nishinippori',
        id: 97,
      },
      {
        label: '五反田',
        slug: 'gotanda',
        id: 98,
      },
      {
        label: '品川',
        slug: 'shinagawa',
        id: 99,
      },
      {
        label: '秋葉原',
        slug: 'akihabara',
        id: 100,
      },
      {
        label: '神田',
        slug: 'kanda',
        id: 101,
      },
      {
        label: '新橋',
        slug: 'shinbashi',
        id: 102,
      },
      {
        label: '六本木・麻布',
        slug: 'roppongi_azabu',
        id: 103,
      },
      {
        label: '赤坂',
        slug: 'akasaka',
        id: 104,
      },
      {
        label: '八王子',
        slug: 'hachiouji',
        id: 105,
      },
      {
        label: '錦糸町',
        slug: 'kinshicho',
        id: 106,
      },
      {
        label: '蒲田',
        slug: 'kamata',
        id: 107,
      },
      {
        label: '立川',
        slug: 'tachikawa',
        id: 108,
      },
      {
        label: '吉祥寺',
        slug: 'kichijouji',
        id: 109,
      },
      {
        label: '府中',
        slug: 'fuchu',
        id: 110,
      },
      {
        label: '葛西',
        slug: 'kasai',
        id: 111,
      },
      {
        label: '浜松町',
        slug: 'hamamatsucho',
        id: 112,
      },
    ])
  }
}

// api
class TagApi extends Tag {
  getTag(tag) {
    return this.$axios.$get(`/api/users/tags/groups/${tag}`)
  }

  getArea() {
    return this.$axios.$get(
      'https://api.sagasanight.com/api/users/tags/groups/prefectures'
    )
  }
}

export default makeFactoryClass(TagMock, TagApi)
