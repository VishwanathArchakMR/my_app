import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'projects',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="th-large" color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'contact',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="phone" color={color} />,
        }}
      />
    </Tabs>
  );
}
