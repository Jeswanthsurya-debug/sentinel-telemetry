# sentinel-telemetry
# ⚡ Sentinel: Real-Time Mobile Hardware Telemetry & Thermal Profiler

**Sentinel** is a high-performance native Android application built to collect, monitor, and stream real-time hardware telemetry—specifically battery metrics and temperature variations—under intense mobile workloads. Designed for edge device health monitoring, low-latency performance profiling, and thermal management, Sentinel streams data continuously over WebSockets.

---

## 🚀 Key Features

* **Real-Time Hardware Tracking**: Intercepts native Android battery and thermal broadcasts to calculate dynamic battery percentages, voltage, and hardware temperatures.
* **Low-Latency WebSocket Streaming**: Uses an asynchronous OkHttp client to maintain a persistent TCP WebSocket connection, transmitting JSON telemetry payloads every 1.5 seconds.
* **Thermal Spike Simulator**: Features a built-in UI simulator toggle to force a high-temperature state ($46.5^\circ\text{C}$), allowing developers to test remote alert systems and throttling thresholds without overheating physical hardware.
* **Dynamic Server Target Configuration**: Configurable target IP endpoint directly from the mobile UI for seamless testing across local developer networks.
* **Modern Jetpack Compose UI**: Built with dynamic state management and clean, declarative Android UI components.

---

## 🛠️ Tech Stack & Dependencies

* **Language**: Kotlin
* **UI Framework**: Jetpack Compose
* **Networking**: OkHttp 4.x (WebSockets)
* **Android OS APIs**: `BroadcastReceiver`, `Intent.ACTION_BATTERY_CHANGED`
* **Architecture**: Event-driven state management

---

## 📦 Telemetry Payload Format

Sentinel formats and streams real-time telemetry packets in JSON structure:

```json
{
  "temp": 46.5,
  "level": 80,
  "status": "OVERHEAT"
}
