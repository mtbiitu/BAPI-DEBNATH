import { IndustrialSolution } from '../types';

export const INDUSTRIAL_SOLUTIONS: IndustrialSolution[] = [
  {
    slug: 'smart-attendance-brilliantly-secure',
    title: 'Smart Attendance. Brilliantly secure.',
    subtitle: 'Industrial-Grade Dual-Biometric & AI Anti-Proxy Terminal',
    image: 'https://pub-b9de077ba7264591a596e55d6ae57d94.r2.dev/Attendance-Machine.webp',
    description:
      'Engineered for universities, research laboratories, and industrial assembly facilities, the Smart Attendance terminal combines edge AI facial feature recognition, cryptographic RFID tokens, BLE proximity gating, and dual-band cloud synchronization inside a ruggedized, tamper-resistant enclosure.',
    features: [
      'Sub-300ms Multi-Modal Verification (Dual RFID & Edge Face Detection)',
      'TinyML Anti-Spoofing & Liveness Detection running locally on silicon',
      'BLE Proximity RSSI Gating to eliminate buddy-punching & proxy check-ins',
      'Offline Local SQLite Flash Buffer with zero record loss during outages',
      'Instant Cloud Synchronization with REST webhooks, SMS alerts & ERP ledgers',
      'Custom Parametric CAD Enclosure fabricated with high-tolerance filaments',
    ],
    specs: [
      { label: 'Core Processor', value: 'Dual-Core ESP32-S3 @ 240MHz with Vector Acceleration' },
      { label: 'Vision Pipeline', value: 'OV2640 Sensor with 850nm IR Illumination & Anti-Glare Glass' },
      { label: 'Biometrics & RF', value: 'NXP RC522 13.56MHz Mifare RFID + BLE 5.0 Beacon Tracking' },
      { label: 'Display & Audio', value: '2.4" High-Contrast 320x240 IPS Panel + I2S Buzzer Feedback' },
      { label: 'Power Architecture', value: '9V-28V DC Wide Input, Dual Buck Regulators, Supercap Hold-up' },
      { label: 'Enclosure Rating', value: 'Parametric IP54 Dust & Splash Resilient Enclosure' },
    ],
    tags: ['Industrial Automation', 'ESP32-S3', 'Edge AI', 'Biometrics', 'BLE Gating', 'CAD & Enclosure'],
  },
];
