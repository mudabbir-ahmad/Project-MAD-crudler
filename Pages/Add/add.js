export default function add() {
  return (
    <View style={styles.container}>
      <Text>activity 1 complete on week 1 yay!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
rff