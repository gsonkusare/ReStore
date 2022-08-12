using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails { Title = "bad request" });
        }

        [HttpGet("unauthorise")]
        public ActionResult GetUnauthorise()
        {
            return Unauthorized();
        }

        [HttpGet("validation-error")]
        public ActionResult GetvalidationError()
        {
            ModelState.AddModelError("Error1", "1st error");
            ModelState.AddModelError("Error2", "2nd error");
            return ValidationProblem();
        }

        [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            throw new Exception("Server err");
        }
    }
}