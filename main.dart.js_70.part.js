self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
ayP(d){var x,w,v
switch(d.w.a){case 1:x=d.c
w=x!=null?new A.dR(x.glj(x)):C.hI
break
case 0:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.glj(w)
w=new A.d4(x,v==null?C.t:v)}else if(w==null)w=D.nh
break
default:w=null}return new B.jC(d.a,d.f,d.b,d.e,w)},
acA(d,e,f){var x,w,v,u,t,s=null,r=d==null
if(r&&e==null)return s
if(!r&&e!=null){if(f===0)return d
if(f===1)return e}x=r?s:d.a
w=e==null
x=A.H(x,w?s:e.a,f)
v=r?s:d.b
v=A.axh(v,w?s:e.b,f)
u=f<0.5?d.c:e.c
t=r?s:d.d
t=A.ask(t,w?s:e.d,f)
r=r?s:d.e
r=A.eB(r,w?s:e.e,f)
r.toString
return new B.jC(x,v,u,t,r)},
jC:function jC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ta:function Ta(d,e){var _=this
_.b=d
_.d=_.c=null
_.e=$
_.w=_.r=_.f=null
_.y=_.x=$
_.z=null
_.a=e},
ao2:function ao2(){},
ao3:function ao3(d,e,f){this.a=d
this.b=e
this.c=f}},A,J,C,D
B=a.updateHolder(c[33],B)
A=c[0]
J=c[1]
C=c[2]
D=c[123]
B.jC.prototype={
gd6(d){return this.e.geG()},
gwN(){return this.d!=null},
d4(d,e){if(d instanceof A.bp)return B.acA(B.ayP(d),this,e)
else if(d==null||d instanceof B.jC)return B.acA(y.b.a(d),this,e)
return this.Gq(d,e)},
d5(d,e){if(d instanceof A.bp)return B.acA(this,B.ayP(d),e)
else if(d==null||d instanceof B.jC)return B.acA(this,y.b.a(d),e)
return this.Gr(d,e)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.a4(e)!==A.G(x))return!1
return e instanceof B.jC&&J.h(e.a,x.a)&&J.h(e.b,x.b)&&J.h(e.c,x.c)&&A.dy(e.d,x.d)&&e.e.k(0,x.e)},
gv(d){var x=this,w=x.d
w=w==null?null:A.eg(w)
return A.ab(x.a,x.b,x.c,x.e,w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
DL(d,e,f){return this.e.cP(new A.y(0,0,0+d.a,0+d.b),f).A(0,e)},
qE(d){return new B.Ta(this,d)}}
B.Ta.prototype={
a5f(d,e){var x,w,v,u=this
if(d.k(0,u.c)&&e==u.d)return
if(u.r==null){x=u.b
x=x.a!=null||x.b!=null}else x=!1
if(x){x=new A.aW(new A.aX())
u.r=x
w=u.b.a
if(w!=null)x.sa6(0,w)}x=u.b
w=x.b
if(w!=null){v=u.r
v.toString
v.syo(w.O3(0,d,e))}w=x.d
if(w!=null){if(u.w==null){u.w=w.length
u.y=A.a3(new A.Y(w,new B.ao2(),A.W(w).i("Y<1,L2>")),!0,y.m)}u.x=A.a3(new A.Y(w,new B.ao3(u,d,e),A.W(w).i("Y<1,Lm>")),!0,y.c)}if(u.r!=null||u.w!=null)u.e=x.e.cP(d,e)
if(x.c!=null)u.f=x.e.hu(d,e)
u.c=d
u.d=e},
a4C(d){var x,w,v=this
if(v.w!=null){x=0
while(!0){w=v.w
w.toString
if(!(x<w))break
d.bM(0,J.a1(A.a(v.x,"_shadowPaths"),x),J.a1(A.a(v.y,"_shadowPaints"),x));++x}}},
a4y(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.z
if(x==null){x=w.a
x.toString
x=w.z=v.aaG(x)
v=x}else v=x
x=w.c
x.toString
v.Qr(d,x,w.f,e)},
n(d){var x=this.z
if(x!=null)x.n(0)
this.Go(0)},
fR(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new A.y(v,u,v+w.a,u+w.b),s=f.d
x.a5f(t,s)
x.a4C(d)
if(x.r!=null){w=A.a(x.e,"_outerPath")
v=x.r
v.toString
d.bM(0,w,v)}x.a4y(d,f)
x.b.e.dZ(d,t,s)}}
var z=a.updateTypes([])
B.ao2.prototype={
$1(d){return d.i5()},
$S:419}
B.ao3.prototype={
$1(d){return this.a.b.e.cP(this.b.cp(d.b).dY(d.d),this.c)},
$S:420};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.jC,A.fD)
x(B.Ta,A.ll)
w(A.b2,[B.ao2,B.ao3])})()
A.b0(b.typeUniverse,JSON.parse('{"jC":{"fD":[]},"Ta":{"ll":[]}}'))
var y={m:A.q("L2"),c:A.q("Lm"),b:A.q("jC?")};(function constants(){D.nh=new A.d0(C.t,C.t,C.t,C.t)})()}
$__dart_deferred_initializers__["quPACMt4YYWXCk9dvVnH6S/apIE="] = $__dart_deferred_initializers__.current
