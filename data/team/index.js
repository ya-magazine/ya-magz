const teams = [
  {
    name: 'Muhammad Davinn Abdielhibban Janithra',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675355/Team%20Photos/daviin_mkrl1j.jpg',
    team: 'CEO',
    social_media: [{ instagram: 'mdavine05_' }],
  },
  {
    name: 'Gitsa Adha Rahmatanisa',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675375/Team%20Photos/gitsa_fkpkz3.jpg',
    team: 'Secretary',
    social_media: [{ instagram: 'giitsadha' }],
  },
  {
    name: 'Samirah Taufik Hidayat',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675353/Team%20Photos/samirah_avm0np.jpg',
    team: 'Financial And Secretary',
    social_media: [{ instagram: 'mirahsam' }],
  },
  {
    name: 'Ahsanah Nur Amalia Amar',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675375/Team%20Photos/ahsana-nur_oqi9lw.jpg',
    team: 'Deputy Chief Editor',
    social_media: [{ instagram: 'ahsanaanr' }],
  },
  {
    name: 'Tri Ahmad Djabalul Lael',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675371/Team%20Photos/tri-ahmet_yezfvn.jpg',
    team: 'Social Media Manager',
    social_media: [{ instagram: 'triahmet' }],
  },
  {
    name: 'Annisa Firdaus',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675378/Team%20Photos/annfir_fhp5q8.jpg',
    team: 'Editorial Board Manager',
    social_media: [{ instagram: 'annnfir' }],
  },
  {
    name: 'Alfianita Azizaturrohmah',
    photo: '',
    team: 'Editor',
    social_media: [{ instagram: 'alfianitaazizah' }],
  },
  {
    name: 'Ghoniyyah Salma',
    photo: '',
    team: 'Editor',
    social_media: [{ instagram: 'ghoniii_' }],
  },
  {
    name: 'Muflihatul Khairiyah',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675355/Team%20Photos/khair_n1c1bw.jpg',
    team: 'Editor',
    social_media: [{ instagram: 'muflihatulkhairiyah' }],
  },
  {
    name: 'Muhammad Dzaky Alfajri',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675353/Team%20Photos/dzaky_qnlzsz.jpg',
    team: 'Editor',
    social_media: [{ instagram: 'dzakyfajri' }],
  },
  {
    name: 'Shabrina Amajida',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675356/Team%20Photos/shabrina_mhtdxj.jpg',
    team: 'Editor',
    social_media: [{ instagram: 'shabamajida' }],
  },
  {
    name: 'Amara Salsabila Putri',
    photo: '',
    team: 'Editorial Board Member',
    social_media: [{ instagram: 'amara.alfatih' }],
  },
  {
    name: 'Azzam Ghufrani',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675371/Team%20Photos/azzam_hdagfw.jpg',
    team: 'Editorial Board Member',
    social_media: [{ instagram: 'jihadismuda' }],
  },
  {
    name: 'Dammy Assyahid Ahmad',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675354/Team%20Photos/dammy_miwvtq.jpg',
    team: 'Editorial Board Member',
    social_media: [{ instagram: 'dammysob' }],
  },
  {
    name: 'Jovita Yosandra',
    photo: '',
    team: 'Editorial Board Member',
    social_media: [{ instagram: 'jovitayosandra' }],
  },
  {
    name: 'Muhammad Hisyam Azhari',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675375/Team%20Photos/hisyam_nwiwnm.jpg',
    team: 'Editorial Board Member',
    social_media: [{ instagram: '_azhari10' }],
  },
  {
    name: 'Akbar Maulana',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675353/Team%20Photos/akbar_de98fu.jpg',
    team: 'Marketing',
    social_media: [{ instagram: 'akbarmaulana98' }],
  },
  {
    name: 'Ghozi Fakhrurroji',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675353/Team%20Photos/ghozi_batni5.jpg',
    team: 'Marketing',
    social_media: [{ instagram: 'ghozifakhru' }],
  },
  {
    name: 'Mukhlis Ramadhan',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675356/Team%20Photos/mukhlis_ejk0tu.jpg',
    team: 'Marketing',
    social_media: [{ instagram: 'mukhliisramadhan' }, { twitter: 'moechil68' }],
  },
  {
    name: 'Naufal Abdurrahman',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675363/Team%20Photos/bang-naufal_bucapa.jpg',
    team: 'Marketing',
    social_media: [{ instagram: 'abdurrahmannaufal' }],
  },
  {
    name: 'Qashmir Ramadhan Iqbal',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675363/Team%20Photos/qashmir_lrqlj0.jpg',
    team: 'Marketing',
    social_media: [{ instagram: 'qshmrrmdhn' }],
  },
  {
    name: 'Annida Maharani',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675354/Team%20Photos/nida_dl4xey.jpg',
    team: 'Reportage',
    social_media: [{ instagram: 'nidamhrni' }],
  },
  {
    name: 'Muhammad Harits Aqila Fredyan',
    photo: '',
    team: 'Social Media Team',
    social_media: [{ instagram: 'harits_aqila09' }],
  },
  {
    name: 'Nisrina Firrosa Atsil',
    photo: '',
    team: 'Social Media Team',
    social_media: [
      { instagram: 'titania_fairy_official' },
      { twitter: 'yusarin235' },
      { facebook: 'Nısrına Firrosa Atsil' },
    ],
  },
  {
    name: 'Shabrina tazakka',
    photo: '',
    team: 'Social Media Team',
    social_media: [{ instagram: 'shabrina.tazakka' }],
  },
  {
    name: 'Syafiq Ammar Muhadzdzib',
    photo: '',
    team: 'Social Media Team',
    social_media: [],
  },
  {
    name: 'Tamima Alifya Haruny',
    photo: '',
    team: 'Social Media Team',
    social_media: [{ instagram: 'tamimaalifya' }],
  },
  {
    name: 'Tazkia Annafsi Aulia',
    photo: '',
    team: 'Social Media Team',
    social_media: [{ instagram: 'tazkiannafs' }],
  },
  {
    name: 'Yumna Nur Khadijah',
    photo: '',
    team: 'Social Media Team',
    social_media: [{ email: 'yumnakhadijah22@gmail.com' }],
  },
  {
    name: 'Zidny Irfan Azima',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675373/Team%20Photos/zidny_hldxrm.jpg',
    team: 'Social Media Team',
    social_media: [{ instagram: 'zidny07' }],
  },
  {
    name: 'Jelang Ramadhan',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675368/Team%20Photos/mas-jeje_laytgm.jpg',
    team: 'Supervisor & TRD',
    social_media: [{ facebook: 'jeramadhan' }],
  },
  {
    name: 'Muhammad Mursyid Khalis',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675360/Team%20Photos/khalis_o3vc5b.jpg',
    team: 'Supervisor & TRD',
    social_media: [{ instagram: 'khalismrsyd' }, { twitter: 'ollicious' }],
  },
  {
    name: 'Ahmad Muslih Zain',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675363/Team%20Photos/ahmad-muslih_n5qoct.jpg',
    team: 'Website Team',
    social_media: [{ instagram: 'aemzayn' }],
  },
  {
    name: 'Muhammad Nabil Suryansyah',
    photo:
      'https://res.cloudinary.com/yacloud/image/upload/v1612675355/Team%20Photos/nabil_j09t9m.jpg',
    team: 'Website Team',
    social_media: [{ instagram: 'nabil_suryansyah' }],
  },
  {
    name: 'Nabila Wijawati Muslim',
    photo: '',
    team: 'Website Team',
    social_media: [{ instagram: 'bil_abil_billa' }],
  },
  {
    name: 'Rhesa Kusuma',
    photo: '',
    team: 'Website Team',
    social_media: [{ instagram: 'rhesakusuma' }],
  },
]

export default teams
