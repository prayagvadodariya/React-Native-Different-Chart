import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, Dimensions, View } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import * as StaticData from './src/Constant/StaticData';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex:1,marginTop:15,marginBottom:15}}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <ScrollView>
      <View>
        <Text style={{textAlign:'center',marginTop:15,fontSize:18}}>React Native All Charts</Text>
      </View>

      
        <View>
          <Text style={{marginLeft:15, marginTop:20}}>Bezier Line Chart</Text>
          <LineChart
            data={StaticData.LineChartData}
            width={Dimensions.get("window").width-30} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={StaticData.chartConfig}
            style={{
              marginVertical: 8,
              borderRadius: 16,
              marginLeft:15,
            }}
          />
        </View>

        <View>
        <Text style={{marginLeft:15, marginTop:20}}>Bar Chart</Text>
          <BarChart
            style={{
              marginVertical: 8,
              borderRadius: 16,
              marginLeft:15
            }}
            // style={graphStyle}
            data={StaticData.BarChartData}
            width={Dimensions.get("window").width-30}
            height={220}
            // yAxisLabel="$"
            yAxisInterval={1}
            chartConfig={StaticData.chartConfig}
            verticalLabelRotation={10}
          />
        </View>

        <View>
        <Text style={{marginLeft:15, marginTop:20}}>Pie Chart</Text>
          <PieChart
            data={StaticData.PieChartData}
            width={Dimensions.get("window").width-30}
            height={220}
            chartConfig={StaticData.chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            center={[10, 0]}
            absolute
            style={{
              marginVertical: 8,
              borderRadius: 16,
              marginLeft:15
            }}
          />
        </View>

        <View>
        <Text style={{marginLeft:15, marginTop:20}}>Progress Chart</Text>
        <ProgressChart
          data={StaticData.ProgressChartData}
          width={Dimensions.get("window").width-30}
          height={220}
          strokeWidth={10}
          radius={32}
          chartConfig={StaticData.chartConfig}
          hideLegend={false}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginLeft:15,
            
          }}
        />
        </View>

        <View>
        <Text style={{marginLeft:15, marginTop:20}}>ContributionGraph</Text>
        <ContributionGraph
          values={StaticData.CommitsData}
          endDate={new Date("2017-04-01")}
          numDays={105}
          width={Dimensions.get("window").width-30}
          height={220}
          chartConfig={StaticData.chartConfig}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginLeft:15,
            
          }}
        />
        </View>

        <View>
        <Text style={{marginLeft:15, marginTop:20}}>StackedBar chart</Text>
        <StackedBarChart
          data={StaticData.StackedChartData}
          width={Dimensions.get("window").width-30}
          height={220}
          chartConfig={StaticData.chartConfig}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginLeft:15,
            
          }}
        />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
