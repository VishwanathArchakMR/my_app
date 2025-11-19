import { StyleSheet, Text, View, Linking, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const projects = [
  {
    name: 'Naveeka (Next-gen Travel App)',
    description: 'Cross-platform Flutter app to connect travelers worldwide, discover, plan, and book experiences. Includes AI-powered trip planner and real-time features.',
    tech: 'Flutter, Node.js, MongoDB, Firebase, Google Cloud, Docker, CI/CD',
    github: 'https://github.com/VishwanathArchakMR/Naveeka'
  },
  {
    name: 'Snap_AI',
    description: 'AI-based image analysis app for efficient photo uploads and meal recognition with an Indian food focus.',
    tech: 'Flutter, Python (AI), Firebase',
    github: 'https://github.com/VishwanathArchakMR/Snap_AI'
  },
  {
    name: 'AI Twin Social Platform',
    description: 'Early concept for a social platform prioritizing authentic connections, emotional wellbeing, and user-owned AI-powered content.',
    tech: 'Flutter, Node.js, MongoDB',
    github: 'https://github.com/VishwanathArchakMR/AITwinPlatform' // Example repo; update with actual if exists
  },
  {
    name: 'Infrastructure First App Stack',
    description: 'Production-grade infrastructure: Terraform, Kubernetes, Helm, Docker, and CI/CD pipeline for highly scalable app deployments.',
    tech: 'Terraform, Kubernetes, Helm, Docker, GitHub Actions',
    github: 'https://github.com/VishwanathArchakMR/infrastructure-main' // Update if you have a public infra repo
  }
];

export default function Projects() {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.header}>My Projects</Text>
        {projects.map((project, idx) => (
          <View key={idx} style={styles.project}>
            <Text style={styles.projectName}>{project.name}</Text>
            <Text style={styles.projectDesc}>{project.description}</Text>
            <Text style={styles.projectTech}>Tech stack: {project.tech}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(project.github)}>
              <Text style={styles.link}>View on GitHub</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 1 },
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flex: 1
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 26,
    textAlign: 'center'
  },
  project: {
    marginBottom: 30,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#222',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  projectName: {
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 3,
  },
  projectDesc: {
    color: '#444',
    fontSize: 15,
    marginBottom: 4,
  },
  projectTech: {
    color: '#0b67df',
    fontSize: 13,
    marginBottom: 8,
  },
  link: {
    color: '#0056b3',
    fontSize: 15,
    fontWeight: '600'
  }
});
