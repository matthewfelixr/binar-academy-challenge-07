import React from 'react'
import Head from 'next/head'
import styles from '../styles/download.module.css'
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function download() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
      <Head>
        <title>Download</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.download}>
        <h2 style={{ textAlign: "center" }}>Download Page</h2>
        <div>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js">
            <Viewer
              fileUrl="/test.pdf"
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div>
      </div>
    </div>
  )
}