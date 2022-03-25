const mainStyles = {

  // CONTENTS
  content_general:{
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content_scroll:{
    flexGrow: 1,
    backgroundColor: '#FAFAFA',
  },
  container:{
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10
  },

  content_center:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  content_right:{
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems: 'flex-end',
  },
  content_info:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10
  },

  bck_img:{
    flex: 1,
    resizeMode: 'cover',
  },

  // IMAGES
  contentImg:{
    width: 120,
    height: 120,
    padding: 10
  },
  image_noData:{
    width: '100%',
    height: '100%',
    marginBottom: 20
  },

  // ICONS
  icon_header:{
    padding: 15
  },

  // FLEX
  flexOne: {
    flex: 1
  },
  flexPointOne: {
    flex: 0.1
  },
  flexPointTwo: {
    flex: 0.2
  },
  flexPointThree: {
    flex: 0.3
  },
  flexPointFour: {
    flex: 0.4
  },
  flexPointFive: {
    flex: 0.5
  },
  flexPointSix: {
    flex: 0.6
  },
  flexPointSeven: {
    flex: 0.7
  },
  flexPointEight: {
    flex: 0.8
  },
  flexPointNine: {
    flex: 0.9
  },

  //ROW
  row:{
    flexDirection: 'row',
    padding: 20
  },
  row_card:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  column:{
    padding: 20
  },

  // TYPOGRAPY 
  h1:{
    fontSize: 40
  },
  h2:{
    fontSize: 32
  },
  h3:{
    fontSize: 28
  },
  h4:{
    fontSize: 24
  },
  h5:{
    fontSize: 20
  },
  h6:{
    fontSize: 16
  },

  font_weight:{
    fontWeight: 'bold'
  },

  text_center:{
    textAlign: 'center'
  },
  text_right:{
    textAlign: 'right'
  },
  text_left:{
    textAlign: 'left'
  },
  small_h2:{
    fontSize:16,
  },

  content_left:{
    alignItems:'flex-end'
  },

  // COLORS
  text_light:{
    color: '#fff',
  },
  text_secondary:{
    color: '#F2BEA0'
  },
  text_gray:{
    color: '#a2a2a2'
  },
  text_danger:{
    color: '#C9252C'
  },
  text_marine:{
    color: '#042940'
  },
  text_blue:{
    color: '#1760bf'
  },
  text_success:{
    color: '#5AA66B'
  },
  text_pink:{
    color: '#F2527D'
  },
  text_orange:{
    color: '#F27D16'
  },
  text_green:{
    color: '#55bb4e'
  },
  text_green_dark:{
    color: '#21481f'
  },

  italic: {fontStyle: 'italic'},

  // CARDS
  card_step:{
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10
  },
  card_final:{
    flex: 1,
    height: '100%',
    borderRadius: 10,
  },
  card_recognitions:{
    flex: 1,
    borderRadius: 10,
  },
  card_item:{
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',

  },
  card_item_content:{
    padding: 10
  },

  containerVacancy: {
    backgroundColor: '#e4f6e2',
  },

  // COMPONENTS
  contentIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 15,
    marginLeft: 5
  },
  label: {
    fontSize:16,
    color: '#0099ff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputSearch: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 5,
    paddingLeft: 20,
  },
  inputSearchOther: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 5,
  },
  iconSearch:{
    color:'#ccc',
    fontSize: 25,
  },
  contentSearch:{
    flex: 1,
    flexDirection:'row',
    paddingBottom: 5,
    alignItems: 'center',
  },
  contentInput: {
    flex: 9,
  },

  // BUTTONS
  btn_prev:{
    backgroundColor: '#6c757d',
    color: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
  },
  btn_next:{
    backgroundColor: '#00b5ad',
    color: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
  },
  btn:{
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 30,
    height: 30,
  },
  btn_danger:{
    backgroundColor:'#C9252C',
  },
  btn_teal:{
    backgroundColor:'#00b5ad',
  },
  btn_info:{
    backgroundColor:'#0099ff',
  },
  btn_cart:{
    width: '60%'
  },
  btn_view_cart:{
    width: '100%',
    height: 40,
    marginTop: 10,
    marginBottom: 10
  },
  btn_blue_dark:{
    backgroundColor: '#2c89ac',
  },

  // BADGE
  badge:{
    marginLeft: 3,
    marginRight: 3,
    textAlign: 'center',
    padding: 5,
    borderWidth: 1,
    borderRadius: 10
  },
  badge_primary:{
    backgroundColor: '#0d6efd',
    color: '#fff',
  },
  badge_success:{
    backgroundColor: '#198754',
    color: '#fff',
  },
  badge_danger:{
    backgroundColor: '#dc3545',
    color: '#fff',
  },
  badge_info:{
    backgroundColor: '#0dcaf0',
    color: '#fff',
  },
  badge_secondary:{
    backgroundColor: '#6c757d',
    color: '#fff',
  },
  badge_blue:{
    backgroundColor: '#25aae1',
    color: '#fff',
  },
  badge_blue_dark:{
    backgroundColor: '#1760bf',
    color: '#fff',
  },
  badge_line_primary:{
    borderColor: '#0d6efd',
    color: '#0d6efd'
  },
  badge_line_success:{
    borderColor: '#198754',
    color: '#198754'
  },
  badge_line_danger:{
    borderColor: '#dc3545',
    color: '#dc3545'
  },
  badge_line_info:{
    borderColor: '#0dcaf0',
    color: '#0dcaf0'
  },
  badge_line_secondary:{
    borderColor: '#6c757d',
    color: '#6c757d'
  },
  badge_line_blue:{
    borderColor: '#25aae1',
    color: '#25aae1'
  },
  badge_line_blue_dark:{
    borderColor: '#1760bf',
    color: '#1760bf'
  },
  badge_line_purple:{
    borderColor: '#5c5594',
    color: '#5c5594'
  },
  badge_line_orange:{
    borderColor: '#f1592a',
    color: '#f1592a'
  },

  // FORM
  text_area_container:{
    borderColor: '#c9c9c9',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 5
  },
  text_area:{
    height: '100%',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },

  // TABLE
  table:{
    borderWidth: 2,
    borderColor: '#c8e1ff'
  },
  head:{
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  row_table:{
    height: 40,
  },
  row_history:{
    borderBottomColor: '#c9c9c9',
    borderBottomWidth: 1
  },
  text_table_wrapper:{
    padding: 10
  },
  table_wrapper: {
    flexDirection: 'row',
    borderBottomColor: '#c9c9c9',
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5
  },

  // OTROS
  lineStyle:{
    borderWidth: 0.5,
    borderColor: '#d9d9d9',
    margin: 10,
    width: '100%'
  },
  line_white:{
    borderColor: 'white',
  },

  // MARGIN / PADDING
  pl_3:{
    paddingLeft: 10,
  },
  mt_3:{
    marginTop: 10,
  },
  mb_3:{
    marginBottom: 10,
  },

  header_menu: {
    paddingTop: 30,
    paddingLeft: 30,
  },

  content_menu:{
    backgroundColor: '#F1F4FF',
  },

  content_header_recognition: {
    backgroundColor: '#FFF',
    opacity: 0.5,
    marginBottom: 10,
    borderRadius: 10
  },

  content_body_recognition: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
  }
};

export default mainStyles;
