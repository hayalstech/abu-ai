'use client'

import { useState } from 'react'
import { Globe, Star, Trophy, Bell, ChevronDown, X, Search, Menu, Users, Clock, Award, Flame, Lock } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('Multiple')
  const [selectedSport, setSelectedSport] = useState('Football')
  const [selectedSubSport, setSelectedSubSport] = useState('Soccer')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [expandedSports, setExpandedSports] = useState<string[]>(['Football'])

  const betslipItems = [
    { id: 1, match: 'Real Kashmir vs Trau FC', selection: 'Trau FC 1x2', odds: 50.2 },
    { id: 2, match: 'Stodder, Timo vs Kopriva, Vit X', selection: 'Stodder, Timo Winner', odds: 3.66 }
  ]

  const navItems = [
    { name: 'Live', icon: '●', active: true },
    { name: 'Sports Betting', icon: '⚽' },
    { name: 'Casino', icon: '🎰', badge: 'New' },
    { name: 'Lucky Drops', icon: '🎲' },
    { name: 'Live Casino', icon: '🎥' },
    { name: 'Promotions', icon: '🎁' }
  ]

  const leftNavItems = [
    { name: 'Home', icon: '🏠', active: true },
    { name: 'Live', icon: '📡' },
    { name: 'Today', icon: '📅' },
    { name: 'Football', icon: '⚽' },
    { name: 'Tennis', icon: '🎾' },
    { name: 'Basketball', icon: '🏀' },
    { name: 'Ice Hockey', icon: '🏒' },
    { name: 'Handball', icon: '🤾' },
    { name: 'American Football', icon: '🏈' },
    { name: 'Baseball', icon: '⚾' },
    { name: 'Horse Racing', icon: '🐎' },
    { name: 'Virtuals', icon: '🎮' },
    { name: 'Search', icon: '🔍' },
    { name: 'Favourites', icon: '⭐' }
  ]

  const sportsCategories = [
    { 
      name: 'Soccer', 
      icon: '⚽',
      subItems: [
        { name: 'Brazil', flag: '🇧🇷' },
        { name: 'Argentina', flag: '🇦🇷' },
        { name: 'Canada', flag: '🇨🇦' },
        { name: 'Portugal', flag: '🇵🇹' },
        { name: 'Spain', flag: '🇪🇸' },
        { name: 'Germany', flag: '🇩🇪' }
      ]
    },
    { name: 'Tennis', icon: '🎾' },
    { name: 'Basketball', icon: '🏀' },
    { name: 'Volleyball', icon: '🏐' },
    { name: 'Cricket', icon: '🏏' },
    { name: 'Table Tennis', icon: '🏓' }
  ]

  const liveMatches = [
    {
      id: 1,
      league: 'World Cup 2022',
      time: 'Today / 22:00',
      homeTeam: { name: 'Argentina', flag: '🇦🇷', odds: { win: 1.85, draw: 6.50, lose: 2.20 } },
      awayTeam: { name: 'France', flag: '🇫🇷' },
      matchResult: 'Match Result',
      locked: false
    },
    {
      id: 2,
      league: 'World Cup 2022',
      time: 'Today / 2:00',
      homeTeam: { name: 'Poland', flag: '🇵🇱', odds: { win: 3.55, draw: 4.50, lose: 2.20 } },
      awayTeam: { name: 'Denmark', flag: '🇩🇰' },
      matchResult: 'Match Result',
      locked: false
    },
    {
      id: 3,
      league: 'World Cup 2022',
      time: 'Today / 22:00',
      homeTeam: { name: 'Mexico', flag: '🇲🇽', odds: { win: 1.85, draw: 9.50, lose: 5.20 } },
      awayTeam: { name: 'Poland', flag: '🇵🇱' },
      matchResult: 'Match Result',
      locked: false
    },
    {
      id: 4,
      league: 'UEFA',
      time: 'Tomorrow / 01:00',
      homeTeam: { name: 'Farence', flag: '🇮🇹', odds: { win: 1.55, draw: 8.50, lose: 2.30 } },
      awayTeam: { name: 'Tenerife', flag: '🇪🇸' },
      matchResult: 'Match Result',
      locked: false
    }
  ]

  const liveGame = {
    homeTeam: 'FK Septemvri Sofia',
    awayTeam: 'PFC CteSKA Sofia',
    score: { home: 0, away: 0 },
    odds: {
      '1': 8.55,
      'X': 8.50,
      '2': 2.70,
      'Goals': 2.6,
      'Over': 8.55,
      'Under': 2.70,
      'Yes': null,
      'No': null
    },
    locked: true
  }

  const toggleSportExpansion = (sportName: string) => {
    setExpandedSports(prev => 
      prev.includes(sportName) 
        ? prev.filter(s => s !== sportName)
        : [...prev, sportName]
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <style jsx global>{`
        @keyframes pulse-red {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-red {
          animation: pulse-red 2s ease-in-out infinite;
        }
      `}</style>

      {/* Top Header */}
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Trophy className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">SportOdds</span>
            </div>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    item.active 
                      ? 'text-emerald-400' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.name === 'Live' ? (
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse-red"></span>
                    ) : (
                      <span>{item.icon}</span>
                    )}
                    {item.name}
                    {item.badge && (
                      <span className="text-xs bg-emerald-500 text-white px-1.5 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm text-slate-300 hover:text-white">
                <img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-5 h-3" />
                <span>En</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg font-medium text-sm transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium text-sm transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Secondary Navigation */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex items-center gap-1 py-2 overflow-x-auto">
            {leftNavItems.map((item) => (
              <button
                key={item.name}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                  item.active 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.name === 'Live' ? (
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse-red"></span>
                    Live
                  </span>
                ) : item.name === 'Today' ? (
                  <span className="flex items-center gap-1">
                    <span className="text-blue-400">📅</span>
                    Today
                  </span>
                ) : (
                  <>
                    <span className="text-slate-400">{item.icon}</span>
                    <span>{item.name}</span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <aside className="lg:col-span-2 space-y-4">
            {/* Popular Events */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-slate-700">
                <h3 className="font-semibold text-sm text-slate-300">Popular events</h3>
              </div>
              <div className="p-2 space-y-1">
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors text-left">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="font-medium text-sm">World Cup 2022</div>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors text-left">
                  <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold">EL</span>
                  <div>
                    <div className="font-medium text-sm">Euroleague. Season</div>
                    <div className="text-xs text-slate-400">22/23</div>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors text-left">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <div className="font-medium text-sm">Favorites</div>
                </button>
              </div>
            </div>

            {/* Live/Prematch Toggle */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="flex border-b border-slate-700">
                <button 
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    activeTab === 'Live' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('Live')}
                >
                  Live
                </button>
                <button 
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    activeTab === 'Prematch' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('Prematch')}
                >
                  Prematch
                </button>
              </div>
              <div className="p-2">
                {sportsCategories.map((sport) => (
                  <div key={sport.name}>
                    <button
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                        selectedSubSport === sport.name ? 'bg-slate-700 text-emerald-400' : 'hover:bg-slate-700 text-slate-300'
                      }`}
                      onClick={() => {
                        if (sport.subItems) {
                          toggleSportExpansion(sport.name)
                        }
                        setSelectedSubSport(sport.name)
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{sport.icon}</span>
                        <span className="font-medium text-sm">{sport.name}</span>
                      </div>
                      {sport.subItems && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${expandedSports.includes(sport.name) ? 'rotate-180' : ''}`} />
                      )}
                    </button>
                    
                    {/* Sub-items */}
                    {sport.subItems && expandedSports.includes(sport.name) && (
                      <div className="ml-8 space-y-1">
                        {sport.subItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-slate-700 transition-colors text-left text-sm text-slate-400"
                          >
                            <span>{subItem.flag}</span>
                            <span>{subItem.name}</span>
                            <span className="ml-auto text-xs text-slate-500">vs</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8 space-y-6">
            {/* Match Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {liveMatches.map((match) => (
                <div key={match.id} className="bg-slate-800 rounded-lg p-4 hover:bg-slate-750 transition-colors">
                  {/* League & Time */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">⚽</span>
                      <span className="text-xs text-slate-400">{match.league}</span>
                    </div>
                    <span className="text-xs text-slate-400">{match.time}</span>
                  </div>
                  
                  {/* Teams */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{match.homeTeam.flag}</span>
                      <span className="font-medium text-sm">{match.homeTeam.name}</span>
                    </div>
                    <span className="text-sm font-bold text-slate-400">VS</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{match.awayTeam.name}</span>
                      <span className="text-2xl">{match.awayTeam.flag}</span>
                    </div>
                  </div>
                  
                  {/* Match Result Label */}
                  <div className="text-xs text-slate-500 mb-3">{match.matchResult}</div>
                  
                  {/* Odds */}
                  <div className="grid grid-cols-3 gap-2">
                    <button className="bg-slate-700 hover:bg-slate-600 py-2 px-3 rounded text-center transition-colors">
                      <span className="text-xs text-slate-400">1</span>
                      <div className="font-bold text-emerald-400">{match.homeTeam.odds.win.toFixed(2)}</div>
                    </button>
                    <button className="bg-slate-700 hover:bg-slate-600 py-2 px-3 rounded text-center transition-colors">
                      <span className="text-xs text-slate-400">X</span>
                      <div className="font-bold">{match.homeTeam.odds.draw.toFixed(2)}</div>
                    </button>
                    <button className="bg-slate-700 hover:bg-slate-600 py-2 px-3 rounded text-center transition-colors">
                      <span className="text-xs text-slate-400">2</span>
                      <div className="font-bold">{match.homeTeam.odds.lose.toFixed(2)}</div>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Highlights */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-slate-700">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                  Live Highlights
                </h2>
              </div>
              
              {/* Sport Tabs */}
              <div className="flex border-b border-slate-700 overflow-x-auto">
                {sportsCategories.map((sport) => (
                  <button
                    key={sport.name}
                    className={`flex items-center gap-2 px-4 py-3 text-sm whitespace-nowrap transition-colors ${
                      selectedSubSport === sport.name 
                        ? 'text-emerald-400 border-b-2 border-emerald-400' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                    onClick={() => setSelectedSubSport(sport.name)}
                  >
                    <span>{sport.icon}</span>
                    <span>{sport.name}</span>
                  </button>
                ))}
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4 p-4 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">⚽</span>
                  <span className="font-medium">Football</span>
                </div>
                <select className="bg-slate-700 border border-slate-600 rounded px-3 py-2 text-sm">
                  <option>Result 1X2</option>
                </select>
                <select className="bg-slate-700 border border-slate-600 rounded px-3 py-2 text-sm">
                  <option>Over/Under</option>
                </select>
                <select className="bg-slate-700 border border-slate-600 rounded px-3 py-2 text-sm">
                  <option>Both teams to score?</option>
                </select>
              </div>

              {/* Live Game Row */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400">⚽</span>
                    <span className="font-medium text-sm">Football</span>
                    <span className="text-sm text-slate-400">First League</span>
                  </div>
                </div>
                
                {/* Game Details */}
                <div className="mt-4">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3">
                      <div className="font-medium text-sm">{liveGame.homeTeam}</div>
                      <div className="font-medium text-sm">{liveGame.awayTeam}</div>
                    </div>
                    
                    <div className="col-span-1 text-center">
                      <div className="text-lg font-bold">{liveGame.score.home}:{liveGame.score.away}</div>
                    </div>
                    
                    {/* Odds Grid */}
                    <div className="col-span-8">
                      <div className="grid grid-cols-8 gap-2 text-center text-xs text-slate-400 mb-2">
                        <span>1</span>
                        <span>X</span>
                        <span>2</span>
                        <span>Goals</span>
                        <span>Over</span>
                        <span>Under</span>
                        <span>Yes</span>
                        <span>No</span>
                      </div>
                      <div className="grid grid-cols-8 gap-2">
                        <button className={`py-2 rounded flex items-center justify-center gap-1 ${liveGame.locked ? 'bg-slate-700' : 'bg-slate-700 hover:bg-slate-600'}`}>
                          {liveGame.locked && <Lock className="w-3 h-3" />}
                          <span className="font-bold">{liveGame.odds['1']}</span>
                        </button>
                        <button className="bg-slate-700 hover:bg-slate-600 py-2 rounded font-bold">{liveGame.odds['X']}</button>
                        <button className="bg-slate-700 hover:bg-slate-600 py-2 rounded font-bold">{liveGame.odds['2']}</button>
                        <button className="bg-slate-700 hover:bg-slate-600 py-2 rounded font-bold">{liveGame.odds['Goals']}</button>
                        <button className="bg-slate-700 hover:bg-slate-600 py-2 rounded font-bold">{liveGame.odds['Over']}</button>
                        <button className="bg-slate-700 hover:bg-slate-600 py-2 rounded font-bold">{liveGame.odds['Under']}</button>
                        <button className="bg-slate-700 hover:bg-slate-600 py-2 rounded"></button>
                        <button className="bg-slate-700 hover:bg-slate-600 py-2 rounded"></button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Star Button */}
                  <div className="flex justify-end mt-2">
                    <button className="text-yellow-500 hover:text-yellow-400">
                      <Star className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar - Betslip */}
          <aside className="lg:col-span-2">
            <div className="bg-slate-800 rounded-lg overflow-hidden sticky top-4">
              <div className="p-4 border-b border-slate-700">
                <h3 className="font-semibold text-sm">Betslip</h3>
              </div>
              
              {/* Tabs */}
              <div className="flex border-b border-slate-700">
                <button 
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'Single' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('Single')}
                >
                  Single
                </button>
                <button 
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'Multiple' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('Multiple')}
                >
                  Multiple
                </button>
                <button 
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'System' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('System')}
                >
                  System
                </button>
              </div>

              {/* Betslip Items */}
              <div className="p-4 space-y-3">
                {betslipItems.map((item) => (
                  <div key={item.id} className="bg-slate-700 rounded p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="text-xs text-slate-400 mb-1">{item.match}</div>
                        <div className="text-xs text-emerald-400">{item.selection}</div>
                      </div>
                      <button className="text-slate-400 hover:text-red-400">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Trau FC</span>
                      <span className="text-xs text-slate-400">1x2</span>
                      <span className="font-bold text-emerald-400">{item.odds}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="p-4 border-t border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-400">Total Odds:</span>
                  <span className="text-xl font-bold">25</span>
                </div>
                
                <div className="mb-4">
                  <label className="text-xs text-slate-400 block mb-2">Stake amount, $</label>
                  <input 
                    type="text" 
                    value="0.00 $"
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-sm"
                    readOnly
                  />
                </div>

                {/* Quick Amounts */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <button className="bg-slate-700 hover:bg-slate-600 py-2 rounded text-sm font-medium transition-colors">5</button>
                  <button className="bg-slate-700 hover:bg-slate-600 py-2 rounded text-sm font-medium transition-colors">10</button>
                  <button className="bg-slate-700 hover:bg-slate-600 py-2 rounded text-sm font-medium transition-colors">50</button>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-bold text-sm transition-colors">
                  Sign In & Bet
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
