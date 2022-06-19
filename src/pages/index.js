import Component from '../components/Home/index'
import Layout from '../components/layout/index'

export default function Home() {
  return <Layout child={<Component />} />
}
