/** create a class for purple mattress page
 * store the below to texts with good naming
 * 
    'Sleep your pain away'
   ' Every Purple mattress uses our patented GelFlex Grid to 
    reduce your aches and pains by 40%.¹'
 * 
 * create 2 methods just like scroll
 *
 */

    class PurpleMattressPage {
        primaryPageMessage: string = 'Sleep your pain away'
        secondaryPageMessage: string = ' Every Purple mattress uses our patented GelFlex Grid to reduce your aches and pains by 40%.'

        clickOnSeeMattressButton(): void {
            console.log("Clicking on button")
        } 
        scroll(): void{
            console.log("Scroll the page")
        }
        hooverOver(): void{
            console.log( "hoovering over ... ")
        }
    }


    

