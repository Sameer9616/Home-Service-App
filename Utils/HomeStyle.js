export default {
  container: {
    paddingBottom: 10,
    paddingTop: 20,
    backgroundColor: "#ab31ff",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileMainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    left: 10,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImg: {
    width: 45,
    height: 45,
    borderRadius: 99,
    justifyContent: "flex-start",
  },

  //   Search bar
  serachBarContainer: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  searchBtn: {
    backgroundColor: "#ffff",
    padding: 8,
    borderRadius: 8,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: "#ffff",
    borderRadius: 8,
    width: "85%",
    fontSize: 18,
    fontWeight: "bold",
  },

  // Slider style
  headingSlider: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sliderImg: {
    width: 220,
    height: 150,
    borderRadius: 20,
    resizeMode: "cover",
  },

  // Categories Style
  IconContianer: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#ffffff",
    padding: 17,
    borderRadius: 99,
    marginRight: 15,
    marginBottom: 5,
    left: 5,
  },
  // BusinessListSmall
  businessContainer: {
    padding: 10,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 20,
  },
  infoContainer: {
    padding: 7,
    display: "flex",
    gap: 3,
  },
  businessImg: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
};
