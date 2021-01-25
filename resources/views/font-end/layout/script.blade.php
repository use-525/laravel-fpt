 <script src=" {{ asset('adminLTE/dist/js/jquery-3.5.1.js') }}"></script>
 <script src=" {{ asset('adminLTE/dist/js/bootstrap.min.js') }}" ></script>
  <script src=" {{ asset('adminLTE/dist/js/jquery.validate.js') }}" ></script>
     <script src=" {{ asset('adminLTE/dist/js/firebase-app.js') }}" ></script>
<script src=" {{ asset('adminLTE/dist/js/firebase-analytics.js') }}" ></script>
    <script src=" {{ asset('adminLTE/dist/js/firebase-storage.js') }}" ></script>
  <script>
    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
    });
               $(document).ready(function(){
  let productNumber = localStorage.getItem("cartNumbers");
         if (productNumber){
             $('.cart_quantity').text(productNumber);
         }
    });
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfrmlaMhwMU3fGQNRYo5R_PHPv1WYscB0",
  authDomain: "laravel-fpt.firebaseapp.com",
  projectId: "laravel-fpt",
  storageBucket: "laravel-fpt.appspot.com",
  messagingSenderId: "1034496985557",
  appId: "1:1034496985557:web:b2dcd368d77cb41922155c",
  measurementId: "G-JJLW5ZWL3P"
};
firebase.initializeApp(firebaseConfig);
</script>

