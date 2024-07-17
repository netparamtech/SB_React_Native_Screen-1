import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CurrentOpening() {
    return (
        <View>
            <View>
                <View style={{ flexDirection: 'row-reverse' }}>
                    <TouchableOpacity onPress={() => { setIsCut(false) }}>
                        <Entypo name='circle-with-cross' size={24} />
                    </TouchableOpacity>
                </View>

                <View style={{ width: 340, height: 400 }}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Current Opening</Text>
                    </View>

                    <ScrollView style={styles.ScrollViews} nestedScrollEnabled={true}>
                        <View style={styles.header}>
                            <Text style={styles.heading}>Sr.No</Text>
                            <Text style={styles.heading}>JOB ROLE</Text>
                            <Text style={styles.heading}>COMPANY NAME</Text>
                            <Text style={styles.heading}>APPLY URL LINK</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <FlatList
                                data={currentOpening}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <View style={styles.TableDataContainer}>
                                        <Text style={styles.TableData}>{item.index}</Text>
                                        <Text style={styles.TableData}>{item.role}</Text>
                                        <Text style={styles.TableData}>{item.company}</Text>
                                        <TouchableOpacity onPress={() => { CurrentOpeningApply(item.apply_url) }}>
                                            <Text style={styles.TableData}>{item.apply_url}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                nestedScrollEnabled={true}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>    </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
    backgroundColor: '#008577',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 5,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 16,
    color: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: 'auto',
    gap: 15,
    backgroundColor: '#008577'
  },
  heading: {
    fontSize: 16,
    padding: 10,
    color: '#fff',
    paddingHorizontal: 13
  },
  TableDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: 'auto',
    gap: 15,
    marginTop: 4,
    // =====
    padding: 22,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#C5E2E6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
        flex:1

    // paddingHorizontal: 20
  },
  TableData: {
    fontSize: 17,
    paddingHorizontal: 20,
  },
})