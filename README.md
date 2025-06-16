
# 🏏 ICC Live Scores & Team Rankings React App

This is a modern React-based web application that displays live cricket scores and team rankings for all three formats – Test, ODI, and T20I – using the [CricAPI](https://www.cricapi.com/) and fallback demo data in case of API failure.

## 🚀 Features

- 🔴 Live cricket match updates with team flags and scores
- 🏏 Upcoming matches shown when API fails
- 📊 ICC Team Rankings (Test, ODI, T20I)
- 🌐 Country flag support using [flagcdn.com](https://flagcdn.com/)
- ⚡ Elegant UI with responsive layout and gradient backgrounds

## 📸 Demo

![App Screenshot](https://i.postimg.cc/7LwzyhqV/image.png)

## 🛠️ Tech Stack

- React.js (Functional components + Hooks)
- Tailwind CSS
- Lucide Icons

## 📦 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/icc-live-scores.git
cd icc-live-scores
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm run dev
```

> ⚠️ **Make sure you have Node.js and npm installed.**

## 🔑 API Configuration

This project uses [CricAPI](https://www.cricapi.com/) to fetch live match data.

Update the API key in the `LiveScores.jsx` file:

```js
const API_KEY = 'your-cricapi-key-here';
```

If the API fails, fallback demo data will be shown automatically.

## 📁 Project Structure

```
src/
├── components/
│   ├── LiveScores.jsx
│   ├── PointTable.jsx
├── App.jsx
├── main.jsx
public/
README.md
```

## 🙌 Acknowledgements

* [CricAPI](https://www.cricapi.com/) for cricket match data
* [FlagCDN](https://flagcdn.com/) for country flags
* [Lucide React](https://lucide.dev/) for modern icons

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

```

---

