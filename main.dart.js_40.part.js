self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
ex(d,e,f,g){var x=e==null&&g===C.N
return new A.Mn(g,f,e,x,d,null)},
Mn:function Mn(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.x=h
_.a=i},
ace:function ace(d,e,f){this.a=d
this.b=e
this.c=f},
wi:function wi(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
SP:function SP(d,e){var _=this
_.ch=_.p3=null
_.CW=!1
_.d=_.c=_.b=_.a=_.cx=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ay=_.ax=_.at=!1},
Ez:function Ez(d,e,f,g,h,i){var _=this
_.l=d
_.t=e
_.T=f
_.a9=g
_.l$=h
_.go=_.fy=null
_.id=!1
_.k2=_.k1=null
_.k3=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=i
_.ch=!1
_.CW=$
_.cx=!0
_.cy=null
_.db=!0
_.dx=null
_.a=0
_.c=_.b=null},
ame:function ame(d,e){this.a=d
this.b=e},
amd:function amd(d,e){this.a=d
this.b=e},
FZ:function FZ(){},
V_:function V_(){},
V0:function V0(){}},D,B,C
A=a.updateHolder(c[53],A)
D=c[57]
B=c[0]
C=c[2]
A.Mn.prototype={
I(d,e){var x,w,v,u=this,t=null,s={},r=D.aAq(e,u.c,!1),q=u.x
s.a=q
x=u.e
if(x!=null)s.a=new B.bN(x,q,t)
x=u.r
w=x?B.kz(e):u.f
v=D.asg(r,w,C.y,!1,t,t,t,t,new A.ace(s,u,r))
return x&&w!=null?D.ax3(v):v}}
A.wi.prototype={
aC(d){var x=new A.Ez(this.e,this.f,this.r,B.aq(y.h),null,B.aq(y.d))
x.gao()
x.CW=!0
x.sbc(null)
return x},
aH(d,e){var x
e.sdz(this.e)
e.sbN(0,this.f)
x=this.r
if(x!==e.T){e.T=x
e.ap()
e.am()}},
bz(d){return new A.SP(this,C.V)}}
A.SP.prototype={}
A.Ez.prototype={
sdz(d){if(d===this.l)return
this.l=d
this.V()},
sbN(d,e){var x=this,w=x.t
if(e===w)return
if(x.b!=null)w.P(0,x.gut())
x.t=e
if(x.b!=null)e.a5(0,x.gut())
x.V()},
a2x(){this.ap()
this.am()},
dt(d){if(!(d.e instanceof B.cc))d.e=new B.cc()},
af(d){this.Wt(d)
this.t.a5(0,this.gut())},
a8(d){this.t.P(0,this.gut())
this.Wu(0)},
gao(){return!0},
ga7M(){switch(B.br(this.l).a){case 0:return this.k1.a
case 1:return this.k1.b}},
ga3n(){var x=this,w=x.l$
if(w==null)return 0
switch(B.br(x.l).a){case 0:return Math.max(0,w.k1.a-x.k1.a)
case 1:return Math.max(0,w.k1.b-x.k1.b)}},
IV(d){switch(B.br(this.l).a){case 0:return new B.aa(0,1/0,d.c,d.d)
case 1:return new B.aa(d.a,d.b,0,1/0)}},
aP(d){var x=this.l$
if(x!=null)return x.W(C.T,d,x.gaY())
return 0},
aJ(d){var x=this.l$
if(x!=null)return x.W(C.P,d,x.gaU())
return 0},
aK(d){var x=this.l$
if(x!=null)return x.W(C.Q,d,x.gaV())
return 0},
aO(d){var x=this.l$
if(x!=null)return x.W(C.a0,d,x.gb5())
return 0},
bS(d){var x=this.l$
if(x==null)return new B.P(C.f.G(0,d.a,d.b),C.f.G(0,d.c,d.d))
return d.aW(x.fS(this.IV(d)))},
by(){var x=this,w=y.a.a(B.u.prototype.ga3.call(x)),v=x.l$
if(v==null)x.k1=new B.P(C.f.G(0,w.a,w.b),C.f.G(0,w.c,w.d))
else{v.cg(0,x.IV(w),!0)
v=x.l$.k1
v.toString
x.k1=w.aW(v)}x.t.nq(x.ga7M())
x.t.nn(0,x.ga3n())},
pY(d){var x=this
switch(x.l.a){case 0:return new B.j(0,d-x.l$.k1.b+x.k1.b)
case 2:return new B.j(0,-d)
case 3:return new B.j(d-x.l$.k1.a+x.k1.a,0)
case 1:return new B.j(-d,0)}},
Lh(d){var x,w,v,u,t=d.a
if(!(t<0)){x=d.b
if(!(x<0)){w=this.l$.k1
v=w.a
u=this.k1
t=t+v>u.a||x+w.b>u.b}else t=!0}else t=!0
return t},
ah(d,e){var x,w,v,u,t=this
if(t.l$!=null){x=t.t.as
x.toString
x=t.pY(x)
w=new A.ame(t,x)
x=t.Lh(x)&&t.T!==C.v
v=t.a9
if(x){x=B.a(t.CW,"_needsCompositing")
u=t.k1
v.sau(0,d.kb(x,e,new B.x(0,0,0+u.a,0+u.b),w,t.T,v.a))}else{v.sau(0,null)
w.$2(d,e)}}},
n(d){this.a9.sau(0,null)
this.jz(0)},
d8(d,e){var x=this.t.as
x.toString
x=this.pY(x)
e.aQ(0,x.a,x.b)},
iZ(d){var x=this,w=x.t.as
w.toString
w=x.pY(w)
if(x.Lh(w)){w=x.k1
return new B.x(0,0,0+w.a,0+w.b)}return null},
cp(d,e){var x,w=this
if(w.l$!=null){x=w.t.as
x.toString
return d.iU(new A.amd(w,e),w.pY(x),e)}return!1},
ms(d,e,f){var x,w,v,u,t,s,r,q=this
if(f==null)f=d.gji()
if(!(d instanceof B.z)){x=q.t.as
x.toString
return new D.q2(x,f)}w=B.nc(d.cz(0,q.l$),f)
x=q.l$.k1
x.toString
switch(q.l.a){case 0:v=q.k1.b
u=w.d
t=x.b-u
s=u-w.b
break
case 1:v=q.k1.a
t=w.a
s=w.c-t
break
case 2:v=q.k1.b
t=w.b
s=w.d-t
break
case 3:v=q.k1.a
u=w.c
t=x.a-u
s=u-w.a
break
default:t=null
s=null
v=null}r=t-(v-s)*e
return new D.q2(r,w.cm(q.pY(r)))},
e2(d,e,f,g){this.GG(d,null,f,D.axj(d,e,f,this.t,g,this))},
pj(){return this.e2(C.aM,null,C.x,null)},
lw(d){return this.e2(C.aM,null,C.x,d)},
mI(d,e,f){return this.e2(d,null,e,f)},
lx(d,e){return this.e2(C.aM,d,C.x,e)},
CD(d){var x
switch(B.br(this.l).a){case 1:x=this.k1
return new B.x(0,-250,0+x.a,0+x.b+250)
case 0:x=this.k1
return new B.x(-250,0,0+x.a+250,0+x.b)}},
$iAC:1}
A.FZ.prototype={
af(d){var x
this.d6(d)
x=this.l$
if(x!=null)x.af(d)},
a8(d){var x
this.cR(0)
x=this.l$
if(x!=null)x.a8(0)}}
A.V_.prototype={}
A.V0.prototype={}
var z=a.updateTypes(["y(y)","wi(B,hf)","~()","~({curve:eF,descendant:u?,duration:aV,rect:x?})"])
A.ace.prototype={
$2(d,e){return new A.wi(this.c,e,C.b1,this.a.a,null)},
$S:z+1}
A.ame.prototype={
$2(d,e){var x=this.a.l$
x.toString
d.dk(x,e.a_(0,this.b))},
$S:24}
A.amd.prototype={
$2(d,e){return this.a.l$.bG(d,e)},
$S:9};(function aliases(){var x=A.FZ.prototype
x.Wt=x.af
x.Wu=x.a8})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a.installInstanceTearOff
var u
x(u=A.Ez.prototype,"gut","a2x",2)
w(u,"gaY","aP",0)
w(u,"gaU","aJ",0)
w(u,"gaV","aK",0)
w(u,"gb5","aO",0)
v(u,"gpi",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["e2","pj","lw","mI","lx"],3,0,0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Mn,B.a0)
u(B.cL,[A.ace,A.ame,A.amd])
v(A.wi,B.aT)
v(A.V_,B.uH)
v(A.V0,A.V_)
v(A.SP,A.V0)
v(A.FZ,B.z)
v(A.Ez,A.FZ)
x(A.FZ,B.aJ)
w(A.V_,B.zT)
w(A.V0,D.NF)})()
B.b1(b.typeUniverse,JSON.parse('{"wi":{"aT":[],"as":[],"f":[]},"Mn":{"a0":[],"f":[]},"SP":{"b_":[],"ap":[],"B":[]},"Ez":{"z":[],"aJ":["z"],"AC":[],"u":[],"R":[],"ak":[]}}'))
var y={a:B.r("aa"),h:B.r("iV"),d:B.r("bC")}}
$__dart_deferred_initializers__["4CpUkPO2dPKD0qv81ObUoq+sNtw="] = $__dart_deferred_initializers__.current