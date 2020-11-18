class Maths{
    constructor(){}

    nurmaths(){
        var x,y
        x=Math.round(random(1,10))
        y=Math.round(random(1,10))
        var sa
        textSize(25)
        text(x+"\n+"+y,displayWidth/2,displayHeight/2-20)
         
        this.answer=createInput("sum")
        this.answer.position(displayWidth/2,displayHeight/2+20)
        sa=x+y
        if(sa==this.answer.value()){
            textSize(40)
            fill("yellow")
            text("yours anwer is right",displayWidth/2,displayHeight/2)
        }else{
            textSize(40)
            fill("yellow")
            text("better luck next time",displayWidth/2,displayHeight/2)

        }
    }

    junmaths(){
        var x,y
        x=Math.round(random(1,20))
        y=Math.round(random(1,25))
        var sa
        textSize(25)
        text(x+"\n+"+y,displayWidth/2,displayHeight/2-20)
         
        this.answer=createInput("sum")
        this.answer.position(displayWidth/2,displayHeight/2+20)
        sa=x+y
        if(sa==this.answer.value()){
            textSize(40)
            fill("yellow")
            text("yours anwer is right",displayWidth/2,displayHeight/2)
        }else{
            textSize(40)
            fill("yellow")
            text("better luck next time",displayWidth/2,displayHeight/2)
        }

    }

    senmaths(){
        var x,y
        x=Math.round(random(1,50))
        y=Math.round(random(1,49))
        var sa
        textSize(25)
        text(x+"\n+"+y,displayWidth/2,displayHeight/2-20)
         
        this.answer=createInput("sum")
        this.answer.position(displayWidth/2,displayHeight/2+20)
        sa=x+y
        if(sa==this.answer.value()){
            textSize(40)
            fill("yellow")
            text("yours anwer is right",displayWidth/2,displayHeight/2)
        }else{
            textSize(40)
            fill("yellow")
            text("better luck next time",displayWidth/2,displayHeight/2)
        }

    }

}