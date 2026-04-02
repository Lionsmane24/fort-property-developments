"use client";
import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ComposedChart, Line } from "recharts";

// ── LIVE TWS DATA (2026-03-27) ───────────────────────────────────────────────
const OHLCV_DAILY = [
  {date:"2026-01-02",open:7.00,high:7.15,low:6.95,close:7.14,volume:1053560},
  {date:"2026-01-05",open:7.00,high:7.00,low:6.42,close:6.61,volume:7792434},
  {date:"2026-01-06",open:6.64,high:6.69,low:6.435,close:6.48,volume:4419659},
  {date:"2026-01-07",open:6.40,high:6.42,low:6.22,close:6.41,volume:3336715},
  {date:"2026-01-08",open:6.45,high:6.50,low:6.27,close:6.49,volume:5922332},
  {date:"2026-01-09",open:6.52,high:6.61,low:6.48,close:6.56,volume:3606995},
  {date:"2026-01-12",open:6.57,high:6.845,low:6.57,close:6.83,volume:3439699},
  {date:"2026-01-13",open:6.91,high:7.07,low:6.89,close:6.95,volume:2942068},
  {date:"2026-01-14",open:7.01,high:7.125,low:6.93,close:6.98,volume:2718456},
  {date:"2026-01-15",open:6.85,high:7.03,low:6.82,close:6.97,volume:1728300},
  {date:"2026-01-16",open:7.01,high:7.08,low:6.93,close:6.98,volume:1494064},
  {date:"2026-01-19",open:6.98,high:7.09,low:6.96,close:7.01,volume:669850},
  {date:"2026-01-20",open:7.09,high:7.10,low:6.82,close:6.85,volume:2355429},
  {date:"2026-01-21",open:6.98,high:7.35,low:6.93,close:7.32,volume:3287392},
  {date:"2026-01-22",open:7.31,high:7.495,low:7.25,close:7.46,volume:1946263},
  {date:"2026-01-23",open:7.66,high:7.78,low:7.52,close:7.56,volume:2053203},
  {date:"2026-01-26",open:7.66,high:7.73,low:7.44,close:7.71,volume:1874354},
  {date:"2026-01-27",open:7.75,high:7.99,low:7.75,close:7.95,volume:2796732},
  {date:"2026-01-28",open:8.00,high:8.11,low:7.855,close:7.96,volume:1739080},
  {date:"2026-01-29",open:8.14,high:8.33,low:8.05,close:8.31,volume:3228401},
  {date:"2026-01-30",open:8.34,high:8.36,low:7.97,close:7.99,volume:2323690},
  {date:"2026-02-02",open:7.70,high:7.95,low:7.66,close:7.92,volume:1838165},
  {date:"2026-02-03",open:7.93,high:8.21,low:7.89,close:8.19,volume:1555052},
  {date:"2026-02-04",open:8.15,high:8.40,low:7.86,close:8.32,volume:2097393},
  {date:"2026-02-05",open:8.23,high:8.31,low:8.02,close:8.13,volume:1225063},
  {date:"2026-02-06",open:8.17,high:8.66,low:8.16,close:8.62,volume:2354417},
  {date:"2026-02-09",open:8.57,high:8.65,low:8.46,close:8.54,volume:1536447},
  {date:"2026-02-10",open:8.59,high:8.59,low:8.38,close:8.53,volume:1305238},
  {date:"2026-02-11",open:8.65,high:8.705,low:8.495,close:8.67,volume:2247911},
  {date:"2026-02-12",open:8.65,high:8.66,low:8.33,close:8.36,volume:1330019},
  {date:"2026-02-13",open:8.40,high:8.645,low:8.32,close:8.63,volume:1011804},
  {date:"2026-02-17",open:8.60,high:8.74,low:8.41,close:8.61,volume:1370027},
  {date:"2026-02-18",open:8.74,high:8.945,low:8.71,close:8.75,volume:2477498},
  {date:"2026-02-19",open:8.90,high:9.15,low:8.81,close:9.01,volume:2584623},
  {date:"2026-02-20",open:9.04,high:9.08,low:8.74,close:8.88,volume:1511182},
  {date:"2026-02-23",open:8.69,high:8.84,low:8.475,close:8.54,volume:2835171},
  {date:"2026-02-24",open:8.59,high:8.82,low:8.56,close:8.78,volume:1479270},
  {date:"2026-02-25",open:8.89,high:8.89,low:8.60,close:8.68,volume:801639},
  {date:"2026-02-26",open:8.59,high:8.87,low:8.52,close:8.75,volume:1396521},
  {date:"2026-02-27",open:8.90,high:8.95,low:8.70,close:8.82,volume:3051493},
  {date:"2026-03-02",open:9.33,high:9.38,low:8.895,close:8.92,volume:3362889},
  {date:"2026-03-03",open:9.07,high:9.08,low:8.66,close:8.74,volume:2385030},
  {date:"2026-03-04",open:8.72,high:8.845,low:8.56,close:8.75,volume:1606169},
  {date:"2026-03-05",open:8.75,high:8.91,low:8.63,close:8.77,volume:2533554},
  {date:"2026-03-06",open:8.97,high:9.02,low:8.68,close:8.75,volume:3388846},
  {date:"2026-03-09",open:8.85,high:8.98,low:8.56,close:8.63,volume:2340700},
  {date:"2026-03-10",open:8.52,high:8.83,low:8.49,close:8.78,volume:1615500},
  {date:"2026-03-11",open:8.75,high:8.94,low:8.70,close:8.92,volume:2363236},
  {date:"2026-03-12",open:8.97,high:9.06,low:8.88,close:9.02,volume:4780502},
  {date:"2026-03-13",open:8.99,high:9.195,low:8.89,close:9.06,volume:2084277},
  {date:"2026-03-16",open:9.10,high:9.25,low:8.95,close:9.10,volume:2133312},
  {date:"2026-03-17",open:9.16,high:9.45,low:9.13,close:9.43,volume:1992794},
  {date:"2026-03-18",open:9.45,high:9.53,low:9.36,close:9.47,volume:2105984},
  {date:"2026-03-19",open:9.50,high:9.87,low:9.46,close:9.78,volume:2522960},
  {date:"2026-03-20",open:9.75,high:9.83,low:9.55,close:9.75,volume:3364190},
  {date:"2026-03-23",open:9.26,high:9.65,low:9.20,close:9.54,volume:4043942},
  {date:"2026-03-24",open:9.60,high:10.14,low:9.56,close:9.98,volume:2913162},
  {date:"2026-03-25",open:9.83,high:10.15,low:9.755,close:9.77,volume:3097423},
  {date:"2026-03-26",open:9.91,high:10.06,low:9.85,close:9.91,volume:3533515},
  {date:"2026-03-27",open:10.05,high:10.69,low:10.01,close:10.53,volume:4250458},
];
const OHLCV_WEEKLY = [
  {date:"2025-09-26",open:6.48,high:6.87,low:6.40,close:6.84,volume:9409829},
  {date:"2025-10-03",open:6.84,high:6.84,low:6.60,close:6.70,volume:7688940},
  {date:"2025-10-10",open:6.74,high:7.20,low:6.59,close:6.60,volume:13956004},
  {date:"2025-10-17",open:6.58,high:6.66,low:6.11,close:6.31,volume:8174091},
  {date:"2025-10-24",open:6.31,high:6.90,low:6.29,close:6.72,volume:7885838},
  {date:"2025-10-31",open:6.75,high:7.02,low:6.66,close:6.89,volume:8327119},
  {date:"2025-11-07",open:6.91,high:7.135,low:6.81,close:7.08,volume:8070873},
  {date:"2025-11-14",open:7.15,high:7.40,low:7.01,close:7.37,volume:11070762},
  {date:"2025-11-21",open:7.40,high:8.045,low:7.35,close:7.61,volume:10282698},
  {date:"2025-11-28",open:7.65,high:7.825,low:7.39,close:7.80,volume:5281192},
  {date:"2025-12-05",open:7.85,high:7.99,low:7.61,close:7.81,volume:6825922},
  {date:"2025-12-12",open:7.78,high:7.91,low:6.89,close:7.11,volume:8377179},
  {date:"2026-01-09",open:7.00,high:7.00,low:6.22,close:6.56,volume:25078135},
  {date:"2026-01-16",open:6.57,high:7.125,low:6.57,close:6.98,volume:12322587},
  {date:"2026-01-23",open:6.98,high:7.78,low:6.82,close:7.56,volume:10312137},
  {date:"2026-01-30",open:7.66,high:8.36,low:7.44,close:7.99,volume:11962257},
  {date:"2026-02-06",open:7.70,high:8.66,low:7.66,close:8.62,volume:9070090},
  {date:"2026-02-13",open:8.57,high:8.705,low:8.32,close:8.63,volume:7431419},
  {date:"2026-02-20",open:8.60,high:9.15,low:8.41,close:8.88,volume:7943330},
  {date:"2026-02-27",open:8.69,high:8.95,low:8.475,close:8.82,volume:9564094},
  {date:"2026-03-06",open:9.33,high:9.38,low:8.56,close:8.75,volume:13276488},
  {date:"2026-03-13",open:8.85,high:9.195,low:8.49,close:9.06,volume:13184215},
  {date:"2026-03-20",open:9.10,high:9.87,low:8.95,close:9.75,volume:12119240},
  {date:"2026-03-27",open:9.26,high:10.69,low:9.20,close:10.53,volume:17838500},
];

// ── CONSTANTS ────────────────────────────────────────────────────────────────
const BASE_WTI=65,BASE_AFF=437.5,WTI_SENS=10,CAPEX=310,SHARES=481,NET_CASH=59;
const PEER_M=6.3,ATH_M=10.3,PROD_BASE=39375;

// ── VPA ENGINE ───────────────────────────────────────────────────────────────
function computeVPA(bars:typeof OHLCV_DAILY,lb=20){
  if(bars.length<lb+1)return[];
  return bars.slice(lb).map((bar,i)=>{
    const prev=bars.slice(i,i+lb);
    const avgV=prev.reduce((s,b)=>s+b.volume,0)/lb;
    const avgR=prev.reduce((s,b)=>s+(b.high-b.low),0)/lb;
    const vr=bar.volume/avgV,sp=bar.high-bar.low,sr=avgR>0?sp/avgR:1;
    const dir=bar.close>=bar.open?"UP":"DOWN";
    const cp=sp>0?(bar.close-bar.low)/sp:0.5;
    const vc=vr>=2?"UHV":vr>=1.3?"HIGH":vr>=0.7?"AVG":vr>=0.4?"LOW":"ULV";
    const sc=sr>=1.5?"WIDE":sr>=0.7?"NORM":"NARR";
    const hiV=vc==="HIGH"||vc==="UHV",loV=vc==="LOW"||vc==="ULV";
    let sig:string,st:string;
    if(vc==="UHV"&&dir==="UP"&&sc==="WIDE"&&cp<0.33){sig="BUYING CLIMAX";st="warn";}
    else if(vc==="UHV"&&dir==="DOWN"&&sc==="WIDE"&&cp>0.67){sig="SELLING CLIMAX";st="bull";}
    else if(hiV&&dir==="UP"&&sc==="WIDE"&&cp>0.67){sig="STRONG BUY ▲";st="bull";}
    else if(hiV&&dir==="DOWN"&&sc==="WIDE"&&cp>0.67){sig="SHAKE OUT";st="bull";}
    else if(hiV&&dir==="DOWN"&&sc==="WIDE"&&cp<0.33){sig="STOPPING VOL";st="bull";}
    else if(hiV&&dir==="UP"&&cp<0.33){sig="UPTHRUST";st="bear";}
    else if(hiV&&dir==="UP"&&cp<0.5&&sc!=="NARR"){sig="DISTRIBUTION";st="bear";}
    else if(hiV&&dir==="DOWN"&&cp>0.5){sig="ACCUMULATION";st="bull";}
    else if(loV&&dir==="UP"){sig="NO DEMAND";st="bear";}
    else if(loV&&dir==="DOWN"){sig="NO SUPPLY";st="bull";}
    else{sig="NEUTRAL";st="neut";}
    return{date:bar.date,close:bar.close,volume:bar.volume,vr:+vr.toFixed(2),vc,sc,cp:+cp.toFixed(2),dir,sig,st};
  });
}

// ── COLOURS ──────────────────────────────────────────────────────────────────
const BG="#071120",CARD="#0E1D35",CARD2="#122040",BORDER="#1A3356";
const GREEN="#00E676",RED="#FF4444",AMBER="#F5A623",CYAN="#4FC3F7",WHITE="#E8F0FE";
const MONO="'JetBrains Mono','Courier New',monospace";
const SANS="'Inter','Segoe UI',sans-serif";
const stC=(st:string)=>st==="bull"?GREEN:st==="bear"?RED:st==="warn"?AMBER:"#607080";

// ── SHARED STYLES ─────────────────────────────────────────────────────────────
const card:React.CSSProperties={background:CARD,border:`1px solid ${BORDER}`,borderRadius:10,padding:"16px 18px"};
const lbl:React.CSSProperties={fontFamily:MONO,color:AMBER,fontSize:9,textTransform:"uppercase",letterSpacing:1.2,marginBottom:3};
const val:React.CSSProperties={fontFamily:MONO,fontWeight:700,color:WHITE};

function MetricCard({label,value,sub,col,big}:{label:string,value:string,sub?:string,col?:string,big?:boolean}){
  return(
    <div style={{...card,display:"flex",flexDirection:"column",gap:4,minHeight:90}}>
      <div style={lbl}>{label}</div>
      <div style={{...val,fontSize:big?28:22,color:col||WHITE}}>{value}</div>
      {sub&&<div style={{fontFamily:MONO,color:"#5070A0",fontSize:10}}>{sub}</div>}
    </div>
  );
}

export default function ATHDashboard(){
  const [tab,setTab]=useState<"fcf"|"sens"|"buyback"|"prod"|"vpa">("fcf");
  const [wti,setWti]=useState(94.48);
  const [ath,setAth]=useState(10.55);
  const [wcs,setWcs]=useState(-10.00);
  const [shares,setShares]=useState(5000);
  const [avgCost,setAvgCost]=useState(4.82);

  const m=useMemo(()=>{
    const aff=BASE_AFF+(wti-BASE_WTI)*WTI_SENS;
    const fcf=aff-CAPEX;
    const mc=SHARES*ath;
    const ev=mc-NET_CASH;
    const fcfSh=fcf/SHARES;
    const fcfY=(fcf/mc)*100;
    const evDacf=ev/aff;
    const bb=Math.max(fcf,0);
    const shYr=bb/ath;
    const shrPct=(shYr/SHARES)*100;
    const uplift=fcf-(BASE_AFF-CAPEX);
    const posVal=shares*ath;
    const unrealized=(ath-avgCost)*shares;
    const unrealPct=((ath-avgCost)/avgCost)*100;
    return{aff,fcf,mc,ev,fcfSh,fcfY,evDacf,bb,shYr,shrPct,uplift,posVal,unrealized,unrealPct};
  },[wti,ath,shares,avgCost]);

  const sensRows=useMemo(()=>
    [50,55,60,65,70,75,80,85,90,95,100,105,110].map(w=>{
      const a=BASE_AFF+(w-BASE_WTI)*WTI_SENS,f=a-CAPEX,mc=SHARES*ath;
      return{w,a,f,fsh:f/SHARES,fy:(f/mc)*100,bb:Math.max(f,0),shYr:Math.max(f,0)/ath,floatRed:(Math.max(f,0)/ath/SHARES)*100};
    }),[ath]);

  const fiveYr=useMemo(()=>{
    const prods=[39375,53500,62000,71000,78500];
    let sh=SHARES;
    return["2026","2027","2028","2029","2030"].map((yr,i)=>{
      const affYr=BASE_AFF+(wti-BASE_WTI)*WTI_SENS*(prods[i]/PROD_BASE);
      const fcfYr=affYr-CAPEX;
      const bought=Math.max(fcfYr,0)/ath;
      const start=sh; sh=Math.max(sh-bought,1);
      return{yr,start:+start.toFixed(0),aff:+affYr.toFixed(0),fcf:+fcfYr.toFixed(0),bought:+bought.toFixed(1),end:+sh.toFixed(0),cumRed:+((SHARES-sh)/SHARES*100).toFixed(1),fsh:+(fcfYr/start).toFixed(3)};
    });
  },[wti,ath]);

  const vpaD=useMemo(()=>computeVPA(OHLCV_DAILY,20),[]);
  const vpaW=useMemo(()=>computeVPA(OHLCV_WEEKLY,10),[]);
  const vpaToday=vpaD[vpaD.length-1];
  const vpaLast10=vpaD.slice(-10);
  const bull10=vpaLast10.filter(v=>v.st==="bull").length;
  const bear10=vpaLast10.filter(v=>v.st==="bear").length;
  const vpaVerdict=bull10>=3&&bear10===0?"TRENDING UP ▲":bear10>=3&&bull10===0?"TRENDING DOWN ▼":bull10>bear10?"MILD BULLISH":"RANGING";

  const prodData=[
    {yr:"2025A",Leismer:27000,Hang:9000,Corner:0,DEC:5000},
    {yr:"2026E",Leismer:29000,Hang:8500,Corner:0,DEC:5000},
    {yr:"2027E",Leismer:40000,Hang:8500,Corner:0,DEC:5000},
    {yr:"2028E",Leismer:40000,Hang:8500,Corner:5000,DEC:7500},
    {yr:"2029E",Leismer:40000,Hang:8500,Corner:15000,DEC:7500},
    {yr:"2030E",Leismer:40000,Hang:8500,Corner:15000,DEC:15000},
  ].map(r=>({...r,Total:r.Leismer+r.Hang+r.Corner+r.DEC}));

  const TABS=[
    {id:"fcf",label:"FCF Model"},
    {id:"sens",label:"WTI Sensitivity"},
    {id:"buyback",label:"Buyback Power"},
    {id:"prod",label:"Production"},
    {id:"vpa",label:"VPA Analysis"},
  ] as const;

  const athChg=ath-9.91,athChgPct=(athChg/9.91)*100;

  return(
    <div style={{display:"flex",height:"100vh",background:BG,fontFamily:SANS,overflow:"hidden"}}>

      {/* ── LEFT SIDEBAR ── */}
      <div style={{width:230,background:"#050E1C",borderRight:`1px solid ${BORDER}`,display:"flex",flexDirection:"column",flexShrink:0}}>
        {/* Title */}
        <div style={{padding:"18px 16px 12px",borderBottom:`1px solid ${BORDER}`}}>
          <div style={{fontFamily:MONO,color:AMBER,fontSize:11,letterSpacing:2,fontWeight:700}}>ATH.TO</div>
          <div style={{fontFamily:MONO,color:WHITE,fontSize:13,fontWeight:700,lineHeight:1.3,marginTop:2}}>Live FCF Dashboard</div>
          <div style={{fontFamily:MONO,color:"#405070",fontSize:9,marginTop:3}}>Athabasca Oil · TSX · LIVE</div>
        </div>

        {/* Live Prices */}
        <div style={{padding:"12px 16px",borderBottom:`1px solid ${BORDER}`}}>
          <div style={lbl}>WTI CRUDE (LM46)</div>
          <div style={{fontFamily:MONO,color:GREEN,fontSize:22,fontWeight:700}}>US${wti.toFixed(2)}</div>
          <div style={{fontFamily:MONO,color:GREEN,fontSize:10,marginBottom:10}}>▲ +4.15 (+4.6%) Iran/Hormuz</div>
          <div style={lbl}>ATH.TO (TSX)</div>
          <div style={{fontFamily:MONO,color:CYAN,fontSize:22,fontWeight:700}}>C${ath.toFixed(2)}</div>
          <div style={{fontFamily:MONO,color:athChg>=0?GREEN:RED,fontSize:10}}>
            {athChg>=0?"▲":"▼"} {Math.abs(athChg).toFixed(2)} ({athChgPct.toFixed(1)}%)
          </div>
          <div style={{fontFamily:MONO,color:"#405070",fontSize:9,marginTop:2}}>Bid 10.54 · Ask 10.56 · Vol 4.25M</div>
          <div style={{fontFamily:MONO,color:"#405070",fontSize:9}}>WCS diff: −${Math.abs(wcs).toFixed(2)} → WCS US${(wti+wcs).toFixed(2)}</div>
        </div>

        {/* Inputs */}
        <div style={{padding:"10px 16px",borderBottom:`1px solid ${BORDER}`}}>
          {[
            {lbl:"WTI (US$/bbl)",val:wti,set:(v:string)=>setWti(+v),step:0.5},
            {lbl:"ATH (C$/sh)",val:ath,set:(v:string)=>setAth(+v),step:0.01},
            {lbl:"Shares Owned",val:shares,set:(v:string)=>setShares(+v),step:100},
            {lbl:"Avg Cost (C$)",val:avgCost,set:(v:string)=>setAvgCost(+v),step:0.01},
          ].map(x=>(
            <div key={x.lbl} style={{marginBottom:8}}>
              <div style={{...lbl,marginBottom:2}}>{x.lbl}</div>
              <input type="number" value={x.val} step={x.step} onChange={e=>x.set(e.target.value)}
                style={{width:"100%",background:"#0A1628",border:`1px solid ${BORDER}`,borderRadius:4,padding:"3px 6px",color:AMBER,fontFamily:MONO,fontSize:11}}/>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{padding:"10px 10px",flex:1}}>
          <div style={{...lbl,marginBottom:8,paddingLeft:6}}>Navigation</div>
          {TABS.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)}
              style={{display:"block",width:"100%",textAlign:"left",padding:"9px 12px",marginBottom:4,borderRadius:7,
                background:tab===t.id?CARD2:"transparent",
                border:`1px solid ${tab===t.id?CYAN:BORDER}`,
                color:tab===t.id?CYAN:WHITE,
                fontFamily:MONO,fontSize:11,cursor:"pointer",fontWeight:tab===t.id?700:400}}>
              {tab===t.id?"▶ ":""}{t.label}
            </button>
          ))}
        </div>

        <div style={{padding:"10px 14px",borderTop:`1px solid ${BORDER}`}}>
          <div style={{fontFamily:MONO,color:"#2A4060",fontSize:8}}>TWS 127.0.0.1:7496</div>
          <div style={{fontFamily:MONO,color:"#2A4060",fontSize:8}}>conId 107244647 · Mar 27 2026</div>
        </div>
      </div>

      {/* ── MAIN AREA ── */}
      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>

        {/* Header strip */}
        <div style={{background:"#050E1C",borderBottom:`1px solid ${BORDER}`,padding:"8px 20px",display:"flex",gap:24,alignItems:"center",flexShrink:0}}>
          <div style={{fontFamily:MONO,color:AMBER,fontSize:11,fontWeight:700,letterSpacing:2}}>
            ATH · ATHABASCA OIL CORPORATION · TSX:ATH · <span style={{color:GREEN}}>LIVE</span>
          </div>
          <div style={{flex:1}}/>
          {[
            {lbl:"YOUR POSITION",val:`C$${ath.toFixed(2)}`,sub:`${shares.toLocaleString()} shares · C$${avgCost} avg cost`,col:CYAN},
            {lbl:"POSITION VALUE",val:m.posVal>=1000000?`C$${(m.posVal/1000000).toFixed(3)}M`:`C$${m.posVal.toLocaleString("en",{maximumFractionDigits:0})}`,sub:`${shares.toLocaleString()} shs`,col:WHITE},
            {lbl:"UNREALIZED P&L",val:`${m.unrealized>=0?"+":""}C$${m.unrealized.toLocaleString("en",{maximumFractionDigits:0})}`,sub:`${m.unrealPct>=0?"+":""}${m.unrealPct.toFixed(1)}% return`,col:m.unrealized>=0?GREEN:RED},
            {lbl:"LAST UPDATE",val:"2026-03-27",sub:"09:54:31 PST · TWS Live",col:"#607080"},
          ].map(x=>(
            <div key={x.lbl} style={{textAlign:"right"}}>
              <div style={{...lbl,textAlign:"right"}}>{x.lbl}</div>
              <div style={{fontFamily:MONO,color:x.col,fontSize:13,fontWeight:700}}>{x.val}</div>
              <div style={{fontFamily:MONO,color:"#405070",fontSize:9}}>{x.sub}</div>
            </div>
          ))}
        </div>

        {/* Tab content */}
        <div style={{flex:1,overflow:"auto",padding:16}}>

          {/* ── FCF MODEL ── */}
          {tab==="fcf"&&(
            <div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:12}}>
                <MetricCard label="FCF YIELD" value={`${m.fcfY.toFixed(1)}%`} sub={`Mkt Cap C$${(m.mc/1000).toFixed(2)}B`} col={m.fcfY>8?GREEN:AMBER} big/>
                <MetricCard label="2026E AFF" value={`C$${m.aff.toFixed(0)}MM`} sub={`+${((m.aff/BASE_AFF-1)*100).toFixed(0)}% vs $65 base`} col={GREEN} big/>
                <MetricCard label="EV / DACF" value={`${m.evDacf.toFixed(1)}x`} sub={`EV C$${(m.ev/1000).toFixed(2)}B · Net Cash +$${NET_CASH}MM`} col={AMBER} big/>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:12}}>
                <MetricCard label="FCF / SHARE" value={`C$${m.fcfSh.toFixed(3)}`} sub={`${SHARES}M shares outstanding`} col={CYAN} big/>
                <MetricCard label="FREE CASH FLOW" value={`C$${m.fcf.toFixed(0)}MM`} sub={`2026E at WTI $${wti.toFixed(0)}`} col={m.fcf>0?GREEN:RED} big/>
                <MetricCard label="2P RESERVE NPV10" value="C$5.88B" sub="$12.22/sh · Q3 2025 GLJ report" col={AMBER} big/>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12,marginBottom:16}}>
                <MetricCard label="CAPEX" value={`C$${CAPEX}MM`} sub="2026 Guidance (Thermal $273 + DEC $38)" col={WHITE}/>
                <MetricCard label="MARKET CAP" value={`C$${(m.mc/1000).toFixed(2)}B`} sub={`${SHARES}M shs × C$${ath.toFixed(2)}`} col={WHITE} big/>
              </div>
              <div style={{...card,background:"#051A08",border:`1px solid ${GREEN}`,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 20px"}}>
                <div>
                  <div style={{...lbl,color:GREEN}}>WTI vs $65 Base Rate</div>
                  <div style={{fontFamily:MONO,color:GREEN,fontSize:32,fontWeight:700}}>+C${m.uplift.toFixed(0)}MM</div>
                  <div style={{fontFamily:MONO,color:GREEN,fontSize:12}}>{((m.uplift/(BASE_AFF-CAPEX))*100).toFixed(0)}% additional AFF at current WTI US${wti.toFixed(2)}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{...lbl}}>Break-even Safety</div>
                  {[{lbl:"Operating BE",be:40},{lbl:"Sustaining BE",be:45},{lbl:"Growth BE",be:55}].map(x=>(
                    <div key={x.lbl} style={{fontFamily:MONO,color:GREEN,fontSize:11}}>✓ {x.lbl} ${x.be} — buffer +${(wti-x.be).toFixed(0)}/bbl</div>
                  ))}
                  <div style={{fontFamily:MONO,color:"#405070",fontSize:9,marginTop:4}}>Net Cash: $59MM · Liquidity: $443MM · Tax Pools: $2.1B</div>
                </div>
              </div>
            </div>
          )}

          {/* ── WTI SENSITIVITY ── */}
          {tab==="sens"&&(
            <div style={card}>
              <div style={{...lbl,marginBottom:12,fontSize:11}}>WTI SENSITIVITY TABLE — 2026E FCF MODEL</div>
              <div style={{overflowX:"auto"}}>
                <table style={{width:"100%",borderCollapse:"collapse",fontFamily:MONO,fontSize:12}}>
                  <thead>
                    <tr style={{borderBottom:`2px solid ${BORDER}`}}>
                      {["WTI (US$)","2026E AFF","FCF","FCF YIELD","FCF/SHARE","BUYBACKS","SHARES/YR","FLOAT RED"].map(h=>(
                        <th key={h} style={{padding:"8px 10px",color:AMBER,fontWeight:400,textAlign:"right",fontSize:9,letterSpacing:0.8}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sensRows.map(r=>{
                      const isBase=r.w===65,isCurrent=Math.abs(r.w-wti)<3;
                      const rowBg=isBase?"#0A2010":isCurrent?"#0A1A28":"transparent";
                      const c=r.f<0?RED:r.w>=90?GREEN:r.w>=70?AMBER:WHITE;
                      return(
                        <tr key={r.w} style={{borderBottom:`1px solid ${BORDER}22`,background:rowBg}}>
                          <td style={{padding:"7px 10px",textAlign:"right",color:isBase?AMBER:isCurrent?CYAN:WHITE,fontWeight:isBase||isCurrent?700:400}}>
                            {isBase?"★ ":isCurrent?"◉ ":"  "}US${r.w}
                          </td>
                          <td style={{padding:"7px 10px",textAlign:"right",color:c}}>${r.a.toFixed(0)}MM</td>
                          <td style={{padding:"7px 10px",textAlign:"right",color:r.f<0?RED:c}}>{r.f<0?`-$${Math.abs(r.f).toFixed(0)}`:`$${r.f.toFixed(0)}`}MM</td>
                          <td style={{padding:"7px 10px",textAlign:"right",color:r.fy<0?RED:r.fy>=8?GREEN:c}}>{r.fy.toFixed(1)}%</td>
                          <td style={{padding:"7px 10px",textAlign:"right",color:c}}>${r.fsh.toFixed(3)}</td>
                          <td style={{padding:"7px 10px",textAlign:"right",color:c}}>{r.bb>0?`$${r.bb.toFixed(0)}MM`:"—"}</td>
                          <td style={{padding:"7px 10px",textAlign:"right",color:c}}>{r.shYr>0?`${r.shYr.toFixed(1)}M`:"—"}</td>
                          <td style={{padding:"7px 10px",textAlign:"right",color:r.floatRed>8?GREEN:c}}>{r.floatRed>0?`${r.floatRed.toFixed(1)}%`:"—"}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div style={{marginTop:12,display:"flex",gap:24,fontFamily:MONO,fontSize:10,color:"#405070"}}>
                <span>★ Base case (WTI $65)</span>
                <span>◉ Current WTI (US${wti.toFixed(2)})</span>
                <span style={{color:GREEN}}>■ FCF ≥$400MM</span>
                <span style={{color:AMBER}}>■ FCF $100–$400MM</span>
                <span style={{color:RED}}>■ FCF negative</span>
              </div>
            </div>
          )}

          {/* ── BUYBACK POWER ── */}
          {tab==="buyback"&&(
            <div style={{display:"grid",gridTemplateColumns:"1.4fr 1fr",gap:14}}>
              <div style={card}>
                <div style={{...lbl,marginBottom:10,fontSize:11}}>5-YEAR BUYBACK POWER — WTI ${wti.toFixed(0)} · ATH C${ath.toFixed(2)}</div>
                <table style={{width:"100%",borderCollapse:"collapse",fontFamily:MONO,fontSize:12}}>
                  <thead>
                    <tr style={{borderBottom:`2px solid ${BORDER}`}}>
                      {["Year","Start Shs","AFF","FCF","Bought","End Shs","Cum Red","FCF/sh"].map(h=>(
                        <th key={h} style={{padding:"6px 8px",color:AMBER,fontWeight:400,textAlign:"right",fontSize:9}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {fiveYr.map(r=>(
                      <tr key={r.yr} style={{borderBottom:`1px solid ${BORDER}22`}}>
                        <td style={{padding:"7px 8px",color:AMBER,fontWeight:700}}>{r.yr}</td>
                        <td style={{padding:"7px 8px",textAlign:"right",color:"#607080"}}>{r.start}M</td>
                        <td style={{padding:"7px 8px",textAlign:"right",color:GREEN}}>${r.aff}MM</td>
                        <td style={{padding:"7px 8px",textAlign:"right",color:r.fcf>0?GREEN:RED}}>${r.fcf}MM</td>
                        <td style={{padding:"7px 8px",textAlign:"right",color:GREEN}}>{r.bought}M</td>
                        <td style={{padding:"7px 8px",textAlign:"right",color:AMBER}}>{r.end}M</td>
                        <td style={{padding:"7px 8px",textAlign:"right",color:GREEN,fontWeight:700}}>{r.cumRed}%</td>
                        <td style={{padding:"7px 8px",textAlign:"right",color:GREEN}}>${r.fsh}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{marginTop:10,fontFamily:MONO,color:"#2A4060",fontSize:9}}>* AFF scaled by production growth each year · Buyback at C${ath.toFixed(2)}</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                <div style={{...card,background:"#051A08",border:`1px solid ${GREEN}`}}>
                  <div style={{...lbl,color:GREEN,fontSize:11,marginBottom:10}}>2026 BUYBACK CAPACITY</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
                    {[
                      {lbl:"Annual Capacity",val:`C$${m.bb.toFixed(0)}MM`},
                      {lbl:"Monthly Pace",val:`C$${(m.bb/12).toFixed(0)}MM`},
                      {lbl:"Shares/Year",val:`${m.shYr.toFixed(1)}M`},
                      {lbl:"Trend Reduction",val:`${m.shrPct.toFixed(1)}%/yr`},
                    ].map(x=>(
                      <div key={x.lbl} style={{background:CARD2,borderRadius:6,padding:"8px 10px"}}>
                        <div style={lbl}>{x.lbl}</div>
                        <div style={{fontFamily:MONO,color:GREEN,fontSize:16,fontWeight:700}}>{x.val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{background:CARD2,borderRadius:6,padding:"8px 10px"}}>
                    <div style={lbl}>Year-End Share Count</div>
                    <div style={{fontFamily:MONO,color:GREEN,fontSize:20,fontWeight:700}}>{(SHARES-m.shYr).toFixed(0)}MM</div>
                  </div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                  <div style={{...card,textAlign:"center"}}>
                    <div style={lbl}>Avg Buyback Price</div>
                    <div style={{fontFamily:MONO,color:CYAN,fontSize:22,fontWeight:700,marginTop:4}}>C$4.82</div>
                  </div>
                  <div style={{...card,textAlign:"center"}}>
                    <div style={lbl}>Share Reduction</div>
                    <div style={{fontFamily:MONO,color:GREEN,fontSize:22,fontWeight:700,marginTop:4}}>24%</div>
                    <div style={{fontFamily:MONO,color:"#405070",fontSize:9}}>since Q1 2023</div>
                  </div>
                </div>
                <div style={card}>
                  <div style={{...lbl,fontSize:11,marginBottom:10}}>BUYBACK HISTORY</div>
                  {[
                    {lbl:"CAD since 2023",val:"C$720MM"},
                    {lbl:"Shares bought 2025",val:"39M shs"},
                    {lbl:"Shares bought 2024",val:"~65M shs"},
                    {lbl:"NCIB Renewal",val:"Mar 17, 2026"},
                  ].map(x=>(
                    <div key={x.lbl} style={{display:"flex",justifyContent:"space-between",borderBottom:`1px solid ${BORDER}22`,padding:"6px 0"}}>
                      <span style={{fontFamily:MONO,color:"#607080",fontSize:11}}>{x.lbl}</span>
                      <span style={{fontFamily:MONO,color:WHITE,fontSize:11,fontWeight:700}}>{x.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── PRODUCTION ── */}
          {tab==="prod"&&(
            <div style={{display:"grid",gridTemplateColumns:"1.4fr 1fr",gap:14}}>
              <div style={card}>
                <div style={{...lbl,marginBottom:10,fontSize:11}}>PRODUCTION GROWTH BY ASSET (boe/d) TO 2030</div>
                <table style={{width:"100%",borderCollapse:"collapse",fontFamily:MONO,fontSize:12,marginBottom:12}}>
                  <thead>
                    <tr style={{borderBottom:`2px solid ${BORDER}`}}>
                      {["Year","Leismer","Hangingstone","Corner Ph1","DEC","TOTAL"].map(h=>(
                        <th key={h} style={{padding:"6px 8px",color:AMBER,fontWeight:400,textAlign:"right",fontSize:9}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {prodData.map((r,i)=>(
                      <tr key={r.yr} style={{borderBottom:`1px solid ${BORDER}22`,background:i===0?"#0A1020":"transparent"}}>
                        <td style={{padding:"7px 8px",color:i===0?"#607080":AMBER,fontWeight:700}}>{r.yr}</td>
                        <td style={{padding:"7px 8px",textAlign:"right",color:CYAN}}>{r.Leismer.toLocaleString()}</td>
                        <td style={{padding:"7px 8px",textAlign:"right",color:"#607080"}}>{r.Hang.toLocaleString()}</td>
                        <td style={{padding:"7px 8px",textAlign:"right",color:r.Corner>0?GREEN:"#2A4060"}}>{r.Corner>0?r.Corner.toLocaleString():"—"}</td>
                        <td style={{padding:"7px 8px",textAlign:"right",color:AMBER}}>{r.DEC.toLocaleString()}</td>
                        <td style={{padding:"7px 8px",textAlign:"right",color:WHITE,fontWeight:700}}>{r.Total.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={prodData} margin={{top:0,right:0,left:-20,bottom:0}}>
                    <CartesianGrid strokeDasharray="3 3" stroke={BORDER}/>
                    <XAxis dataKey="yr" tick={{fill:"#607080",fontSize:9,fontFamily:MONO}}/>
                    <YAxis tickFormatter={(v:number)=>`${(v/1000).toFixed(0)}k`} tick={{fill:"#607080",fontSize:9,fontFamily:MONO}}/>
                    <Tooltip contentStyle={{background:CARD,border:`1px solid ${BORDER}`,fontFamily:MONO,fontSize:10}} formatter={(v:number)=>[`${v.toLocaleString()} boe/d`]}/>
                    <Bar dataKey="Leismer" stackId="a" fill={CYAN} name="Leismer"/>
                    <Bar dataKey="Hang" stackId="a" fill="#405080" name="Hangingstone"/>
                    <Bar dataKey="Corner" stackId="a" fill={GREEN} name="Corner Ph1"/>
                    <Bar dataKey="DEC" stackId="a" fill={AMBER} name="DEC"/>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                <div style={{...card,border:`1px solid ${GREEN}`,background:"#051A08"}}>
                  <div style={{...lbl,color:GREEN,fontSize:11}}>Corner Phase 1</div>
                  <div style={{fontFamily:MONO,color:GREEN,fontSize:20,fontWeight:700,marginTop:4}}>+15,000 boe/d</div>
                  <div style={{fontFamily:MONO,color:"#607080",fontSize:10,marginTop:4}}>Sanction H2/2026 · ~3yr to first oil (2029E)</div>
                  <div style={{fontFamily:MONO,color:AMBER,fontSize:11,marginTop:8}}>Value at WTI ${wti.toFixed(0)}:</div>
                  <div style={{fontFamily:MONO,color:GREEN,fontSize:14,fontWeight:700}}>C${((m.aff/PROD_BASE)*15000*ATH_M/1000).toFixed(2)}B (10.3×)</div>
                  <div style={{fontFamily:MONO,color:CYAN,fontSize:12}}>C${((m.aff/PROD_BASE)*15000*PEER_M/1000).toFixed(2)}B (6.3× peer)</div>
                </div>
                <div style={{...card,border:`1px solid ${CYAN}`}}>
                  <div style={{...lbl,color:CYAN,fontSize:11}}>Leismer Expansion</div>
                  <div style={{fontFamily:MONO,color:CYAN,fontSize:14,fontWeight:700,marginTop:4}}>Current: 27,000 boe/d</div>
                  <div style={{fontFamily:MONO,color:GREEN,fontSize:14,fontWeight:700}}>Target: 40,000 boe/d</div>
                  <div style={{fontFamily:MONO,color:"#607080",fontSize:10,marginTop:4}}>12 well pairs steaming H2/2026 · Growth to 40k by late 2027</div>
                  <div style={{fontFamily:MONO,color:AMBER,fontSize:11,marginTop:8}}>+13k boe/d value:</div>
                  <div style={{fontFamily:MONO,color:GREEN,fontSize:14,fontWeight:700}}>C${((m.aff/PROD_BASE)*13000*ATH_M/1000).toFixed(2)}B (10.3×)</div>
                </div>
                <div style={card}>
                  <div style={{...lbl,fontSize:11}}>2030 TARGET</div>
                  <div style={{fontFamily:MONO,color:GREEN,fontSize:24,fontWeight:700,marginTop:4}}>75,000+ boe/d</div>
                  <div style={{fontFamily:MONO,color:AMBER,fontSize:12}}>Thermal Oil 60k+ · DEC 15k+</div>
                </div>
              </div>
            </div>
          )}

          {/* ── VPA ANALYSIS ── */}
          {tab==="vpa"&&(
            <div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
                <div style={{...card,border:`2px solid ${vpaVerdict.includes("▲")?GREEN:vpaVerdict.includes("▼")?RED:AMBER}`}}>
                  <div style={lbl}>Overall Reading (Last 10 Bars)</div>
                  <div style={{fontFamily:MONO,color:vpaVerdict.includes("▲")?GREEN:vpaVerdict.includes("▼")?RED:AMBER,fontSize:26,fontWeight:700,marginTop:4}}>{vpaVerdict}</div>
                  <div style={{fontFamily:MONO,color:"#607080",fontSize:11,marginTop:4}}>{bull10} bullish · {bear10} bearish · {10-bull10-bear10} neutral signals</div>
                </div>
                {vpaToday&&(
                  <div style={{...card,background:"#051A08",border:`1px solid ${GREEN}`}}>
                    <div style={{...lbl,color:GREEN}}>Today — Mar 27, 2026</div>
                    <div style={{fontFamily:MONO,color:GREEN,fontSize:24,fontWeight:700,marginTop:4}}>{vpaToday.sig}</div>
                    <div style={{display:"flex",gap:16,marginTop:8,flexWrap:"wrap"}}>
                      {[
                        {l:"Close",v:`C$${vpaToday.close.toFixed(2)}`,c:GREEN},
                        {l:"Volume",v:`${(vpaToday.volume/1e6).toFixed(2)}M`,c:CYAN},
                        {l:"Vol Class",v:`${vpaToday.vc} (${vpaToday.vr}×)`,c:AMBER},
                        {l:"Spread",v:vpaToday.sc,c:WHITE},
                        {l:"Close Pos",v:`${(vpaToday.cp*100).toFixed(0)}%`,c:WHITE},
                      ].map(x=>(
                        <div key={x.l}>
                          <div style={{...lbl,fontSize:8}}>{x.l}</div>
                          <div style={{fontFamily:MONO,color:x.c,fontSize:13,fontWeight:700}}>{x.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div style={{...card,marginBottom:12}}>
                <div style={{...lbl,marginBottom:8,fontSize:10}}>LAST 10 DAILY BARS</div>
                <table style={{width:"100%",borderCollapse:"collapse",fontFamily:MONO,fontSize:11}}>
                  <thead>
                    <tr style={{borderBottom:`1px solid ${BORDER}`}}>
                      {["Date","Close","Vol (M)","Vol Ratio","Vol Class","Spread","Close %","Dir","VPA SIGNAL"].map(h=>(
                        <th key={h} style={{padding:"4px 8px",color:AMBER,fontWeight:400,textAlign:"left",fontSize:9}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {vpaLast10.map((r,i)=>(
                      <tr key={r.date} style={{borderBottom:`1px solid ${BORDER}22`,background:i===9?"#051A08":"transparent"}}>
                        <td style={{padding:"4px 8px",color:i===9?GREEN:WHITE}}>{r.date.slice(5)}</td>
                        <td style={{padding:"4px 8px",color:r.dir==="UP"?GREEN:RED}}>C${r.close.toFixed(2)}</td>
                        <td style={{padding:"4px 8px",color:CYAN}}>{(r.volume/1e6).toFixed(2)}M</td>
                        <td style={{padding:"4px 8px",color:r.vr>=1.3?AMBER:WHITE}}>{r.vr}×</td>
                        <td style={{padding:"4px 8px",color:(r.vc==="HIGH"||r.vc==="UHV")?AMBER:WHITE}}>{r.vc}</td>
                        <td style={{padding:"4px 8px",color:r.sc==="WIDE"?AMBER:WHITE}}>{r.sc}</td>
                        <td style={{padding:"4px 8px",color:WHITE}}>{(r.cp*100).toFixed(0)}%</td>
                        <td style={{padding:"4px 8px",color:r.dir==="UP"?GREEN:RED}}>{r.dir}</td>
                        <td style={{padding:"4px 8px",color:stC(r.st),fontWeight:i===9?700:400}}>{r.sig}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{...card}}>
                <div style={{...lbl,marginBottom:8,fontSize:10}}>LAST 5 WEEKLY BARS — MACRO STRUCTURE</div>
                <table style={{width:"100%",borderCollapse:"collapse",fontFamily:MONO,fontSize:11}}>
                  <thead>
                    <tr style={{borderBottom:`1px solid ${BORDER}`}}>
                      {["Week","Close","Vol (M)","Vol Ratio","Vol Class","Spread","VPA SIGNAL"].map(h=>(
                        <th key={h} style={{padding:"4px 8px",color:AMBER,fontWeight:400,textAlign:"left",fontSize:9}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {vpaW.slice(-5).map((r,i)=>(
                      <tr key={r.date} style={{borderBottom:`1px solid ${BORDER}22`,background:i===4?"#051A08":"transparent"}}>
                        <td style={{padding:"4px 8px",color:WHITE}}>W/{r.date.slice(5)}</td>
                        <td style={{padding:"4px 8px",color:r.dir==="UP"?GREEN:RED}}>C${r.close.toFixed(2)}</td>
                        <td style={{padding:"4px 8px",color:CYAN}}>{(r.volume/1e6).toFixed(1)}M</td>
                        <td style={{padding:"4px 8px",color:r.vr>=1.3?AMBER:WHITE}}>{r.vr}×</td>
                        <td style={{padding:"4px 8px",color:(r.vc==="HIGH"||r.vc==="UHV")?AMBER:WHITE}}>{r.vc}</td>
                        <td style={{padding:"4px 8px",color:r.sc==="WIDE"?AMBER:WHITE}}>{r.sc}</td>
                        <td style={{padding:"4px 8px",color:stC(r.st),fontWeight:i===4?700:400}}>{r.sig}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
