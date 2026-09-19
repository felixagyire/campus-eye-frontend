export const cameras = [
  { id: 'CAM-01', name: 'Main Gate', location: 'North Entrance', status: 'online', viewers: 3 },
  { id: 'CAM-02', name: 'Engineering Block', location: 'Block A', status: 'online', viewers: 1 },
  { id: 'CAM-03', name: 'Library Entrance', location: 'Central Campus', status: 'online', viewers: 2 },
  { id: 'CAM-04', name: 'Examination Hall', location: 'Academic Zone', status: 'maintenance', viewers: 0 }
]

export const alerts = [
  {
    id: 'ALT-1042',
    type: 'Restricted Area',
    severity: 'high',
    camera: 'CAM-02',
    trackId: 'GP-08D4',
    confidence: 0.92,
    timestamp: '10:42:18',
    date: '19 Sep 2026',
    status: 'new'
  },
  {
    id: 'ALT-1038',
    type: 'Unusual Activity',
    severity: 'medium',
    camera: 'CAM-03',
    trackId: 'GP-14A1',
    confidence: 0.84,
    timestamp: '10:38:41',
    date: '19 Sep 2026',
    status: 'reviewed'
  },
  {
    id: 'ALT-1027',
    type: 'Person Detected',
    severity: 'low',
    camera: 'CAM-01',
    trackId: 'GP-04C9',
    confidence: 0.78,
    timestamp: '10:27:06',
    date: '19 Sep 2026',
    status: 'reviewed'
  }
]

export const tracks = [
  {
    id: 'GP-08D4',
    confidence: 0.92,
    currentCamera: 'CAM-02',
    firstSeen: '10:35:11',
    lastSeen: '10:42:18',
    status: 'active',
    history: ['CAM-01', 'CAM-03', 'CAM-02']
  },
  {
    id: 'GP-14A1',
    confidence: 0.84,
    currentCamera: 'CAM-03',
    firstSeen: '10:31:42',
    lastSeen: '10:38:41',
    status: 'active',
    history: ['CAM-03']
  },
  {
    id: 'GP-04C9',
    confidence: 0.78,
    currentCamera: 'CAM-01',
    firstSeen: '10:20:03',
    lastSeen: '10:27:06',
    status: 'inactive',
    history: ['CAM-01']
  }
]

export const evidence = [
  {
    id: 'EV-0021',
    alertId: 'ALT-1042',
    camera: 'CAM-02',
    trackId: 'GP-08D4',
    event: 'Restricted Area',
    confidence: 0.92,
    timestamp: '10:42:18',
    reviewed: false,
    description: 'A tracked subject was observed within a configured restricted zone.'
  },
  {
    id: 'EV-0018',
    alertId: 'ALT-1038',
    camera: 'CAM-03',
    trackId: 'GP-14A1',
    event: 'Unusual Activity',
    confidence: 0.84,
    timestamp: '10:38:41',
    reviewed: true,
    description: 'Activity candidate generated for authorized human review.'
  }
]

export const activityData = [
  { time: '08:00', alerts: 2, detections: 31 },
  { time: '09:00', alerts: 4, detections: 46 },
  { time: '10:00', alerts: 7, detections: 64 },
  { time: '11:00', alerts: 5, detections: 51 },
  { time: '12:00', alerts: 3, detections: 39 },
  { time: '13:00', alerts: 6, detections: 57 }
]
