import { Users, Info } from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import TrackCard from '../../components/tracks/TrackCard'
import { tracks } from '../../data/mockData'

export default function PeopleTracks() {
  return (
    <>
      <PageHeader title="People & Tracks" description="Review person-track continuity returned by the computer-vision pipeline." />
      <div className="info-banner"><Info size={17} /><span>Track IDs represent system-generated associations. They are not, by themselves, a definitive identity claim.</span></div>
      <div className="track-summary"><strong>{tracks.length}</strong><span>tracked subjects in current sample</span></div>
      <div className="tracks-list">{tracks.map((track) => <TrackCard key={track.id} track={track} />)}</div>
    </>
  )
}
