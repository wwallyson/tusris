import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 250,
    height: 60,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    margin: 16,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 16,
    marginBottom: 10,
  },
  carousel: {
    marginLeft: 10,
  },
  carouselImage: {
    width: 140,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  card: {
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: "#000",
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 180,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  stars: {
    color: "gold",
    fontSize: 16,
    marginTop: 4,
  },
  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
});
